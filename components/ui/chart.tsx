'use client'

import type {
    CartesianGridProps as CartesianGridPrimitiveProps,
    CartesianGridProps,
    LegendPayload,
    LegendProps,
    XAxisProps as XAxisPropsPrimitive,
    YAxisProps as YAxisPrimitiveProps
} from 'recharts'
import type { ContentType as LegendContentType } from 'recharts/types/component/DefaultLegendContent'
import type { NameType, Props as TooltipContentProps, ValueType } from 'recharts/types/component/DefaultTooltipContent'
import type { ContentType as TooltipContentType } from 'recharts/types/component/Tooltip'
import type { CurveType } from 'recharts/types/shape/Curve'
import {
    type ComponentProps,
    createContext,
    Fragment,
    type ReactElement,
    startTransition,
    use,
    useCallback,
    useId,
    useMemo,
    useState
} from 'react'
import { composeRenderProps, ToggleButton, ToggleButtonGroup, type ToggleButtonGroupProps } from 'react-aria-components'
import {
    Area,
    AreaChart as AreaChartPrimitive,
    Bar,
    BarChart as BarChartPrimitive,
    CartesianGrid as CartesianGridPrimitive,
    Cell,
    Legend as LegendPrimitive,
    Line,
    LineChart as LineChartPrimitive,
    type LineProps,
    Pie,
    PieChart as PieChartPrimitive,
    ResponsiveContainer,
    Tooltip as TooltipPrimitive,
    XAxis as XAxisPrimitive,
    YAxis as YAxisPrimitive
} from 'recharts'
import { cn } from '@/lib/utils'
import { Separator } from './separator'

type ChartType = 'default' | 'stacked' | 'percent'
type ChartLayout = 'horizontal' | 'vertical' | 'radial'
type IntervalType = 'preserveStartEnd' | 'equidistantPreserveStart'

export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode
        icon?: React.ComponentType
    } & (
        | { color?: ChartColorKeys | (string & {}); theme?: never }
        | { color?: never; theme: Record<keyof typeof THEMES, string> }
    )
}

const CHART_COLORS = {
    'chart-1': 'var(--chart-1)',
    'chart-2': 'var(--chart-2)',
    'chart-3': 'var(--chart-3)',
    'chart-4': 'var(--chart-4)',
    'chart-5': 'var(--chart-5)'
} as const

type ChartColorKeys = keyof typeof CHART_COLORS | (string & {})

const DEFAULT_COLORS = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'] as const

type ChartContextProps = {
    config: ChartConfig
    data: Record<string, any>[]
    layout: ChartLayout
    dataKey: string
    selectedLegend: string | null
    onLegendSelect: (legendItem: string | null) => void
}

const ChartContext = createContext<ChartContextProps | null>(null)

export function useChart() {
    const context = use(ChartContext)

    if (!context) {
        throw new Error('useChart must be used within a <Chart />')
    }

    return context
}

export function valueToPercent(value: number) {
    return `${(value * 100).toFixed(0)}%`
}

const constructCategoryColors = (
    categories: string[],
    colors: readonly ChartColorKeys[]
): Map<string, ChartColorKeys> => {
    const categoryColors = new Map<string, ChartColorKeys>()

    categories.forEach((category, index) => {
        const color = colors[index % colors.length]
        if (color !== undefined) {
            categoryColors.set(category, color)
        }
    })

    return categoryColors
}

const getColorValue = (color?: string): string => {
    if (!color) {
        return 'var(--chart-1)'
    }

    return CHART_COLORS[color as 'chart-1'] ?? color
}

function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
    if (typeof payload !== 'object' || payload === null) {
        return undefined
    }

    const payloadPayload =
        'payload' in payload && typeof payload.payload === 'object' && payload.payload !== null
            ? payload.payload
            : undefined

    let configLabelKey: string = key

    if (key in payload && typeof payload[key as keyof typeof payload] === 'string') {
        configLabelKey = payload[key as keyof typeof payload] as string
    } else if (
        payloadPayload &&
        key in payloadPayload &&
        typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
    ) {
        configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string
    }

    return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config]
}

interface BaseChartProps<TValue extends ValueType, TName extends NameType>
    extends React.HTMLAttributes<HTMLDivElement> {
    config: ChartConfig
    data: Record<string, any>[]
    dataKey: string
    colors?: readonly (ChartColorKeys | (string & {}))[]
    type?: ChartType
    lineType?: CurveType
    intervalType?: IntervalType
    layout?: ChartLayout
    valueFormatter?: (value: number) => string

    tooltip?: TooltipContentType<TValue, TName> | boolean
    tooltipProps?: Omit<ChartTooltipProps<TValue, TName>, 'content'>

    cartesianGridProps?: CartesianGridProps

    legend?: LegendContentType | boolean
    legendProps?: Omit<React.ComponentProps<typeof LegendPrimitive>, 'content' | 'ref'>

    xAxisProps?: XAxisPropsPrimitive
    yAxisProps?: YAxisPrimitiveProps

    displayEdgeLabelsOnly?: boolean

    hideGridLines?: boolean
    hideXAxis?: boolean
    hideYAxis?: boolean
}

const Chart = ({
    id,
    className,
    children,
    config,
    data,
    dataKey,
    ref,
    layout = 'horizontal',
    ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & {
    config: ChartConfig
    data: Record<string, any>[]
    layout?: ChartLayout
    dataKey: string
    children: ReactElement | ((props: ChartContextProps) => ReactElement)
}) => {
    const uniqueId = useId()
    const chartId = useMemo(() => `chart-${id || uniqueId.replace(/:/g, '')}`, [id, uniqueId])

    const [selectedLegend, setSelectedLegend] = useState<string | null>(null)

    const onLegendSelect = useCallback((legendItem: string | null) => {
        setSelectedLegend(legendItem)
    }, [])

    const value = {
        config,
        selectedLegend,
        onLegendSelect,
        data,
        dataKey,
        layout
    }

    return (
        <ChartContext.Provider value={value}>
            <div
                className={cn(
                    'z-20 flex aspect-video w-full justify-center text-xs',
                    "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/80 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
                    className
                )}
                data-chart={chartId}
                ref={ref}
                {...props}
            >
                <ChartStyle config={config} id={chartId} />
                <ResponsiveContainer height='100%' width='100%'>
                    {typeof children === 'function' ? children(value) : children}
                </ResponsiveContainer>
            </div>
        </ChartContext.Provider>
    )
}

const THEMES = { light: '', dark: '.dark' } as const
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
    const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color)

    if (!colorConfig.length) {
        return null
    }

    return (
        <style
            dangerouslySetInnerHTML={{
                __html: Object.entries(THEMES)
                    .map(
                        ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
    .map(([key, itemConfig]) => {
        const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color
        return color ? `  --color-${key}: ${color};` : null
    })
    .join('\n')}
}
`
                    )
                    .join('\n')
            }}
        />
    )
}

type ChartTooltipProps<TValue extends ValueType, TName extends NameType> = React.ComponentProps<
    typeof TooltipPrimitive<TValue, TName>
>

const ChartTooltip = <TValue extends ValueType, TName extends NameType>(props: ChartTooltipProps<TValue, TName>) => {
    const { layout } = useChart()

    return (
        <TooltipPrimitive
            animationDuration={100}
            cursor={{
                stroke: 'var(--muted)',
                strokeWidth: layout === 'radial' ? 0.1 : 1,
                fill: 'var(--muted)',
                fillOpacity: 0.5
            }}
            isAnimationActive={true}
            offset={20}
            position={{
                y: layout === 'horizontal' ? 0 : undefined,
                x: layout === 'vertical' ? 60 + 20 : undefined
            }}
            wrapperStyle={{ outline: 'none' }}
            {...props}
        />
    )
}

type ChartLegendProps = Omit<React.ComponentProps<typeof LegendPrimitive>, 'ref'>

const ChartLegend = (props: ChartLegendProps) => {
    return <LegendPrimitive align='center' verticalAlign='bottom' {...props} />
}

interface XAxisProps extends Omit<XAxisPropsPrimitive, 'ref'> {
    displayEdgeLabelsOnly?: boolean
    intervalType?: IntervalType
}

const XAxis = ({
    displayEdgeLabelsOnly,
    className,
    intervalType = 'preserveStartEnd',
    minTickGap = 5,
    domain = ['auto', 'auto'],
    ...props
}: XAxisProps) => {
    const { dataKey, data, layout } = useChart()

    return (
        <XAxisPrimitive
            axisLine={false}
            className={cn('text-muted-foreground text-xs', className)}
            dataKey={layout === 'horizontal' ? dataKey : undefined}
            interval={displayEdgeLabelsOnly ? 'preserveStartEnd' : intervalType}
            minTickGap={minTickGap}
            tick={{
                transform: layout === 'horizontal' ? 'translate(32, 6)' : undefined
            }}
            tickLine={false}
            ticks={
                displayEdgeLabelsOnly && data.length >= 2
                    ? [data[0]?.[dataKey], data[data.length - 1]?.[dataKey]]
                    : undefined
            }
            {...props}
        />
    )
}

const YAxis = ({ className, width, domain = ['auto', 'auto'], type, ...props }: Omit<YAxisPrimitiveProps, 'ref'>) => {
    const { layout, dataKey } = useChart()

    return (
        <YAxisPrimitive
            axisLine={false}
            className={cn('text-muted-foreground text-xs', className)}
            dataKey={layout === 'horizontal' ? undefined : dataKey}
            domain={domain}
            interval={layout === 'horizontal' ? undefined : 'equidistantPreserveStart'}
            tick={{
                transform: layout === 'horizontal' ? 'translate(-3, 0)' : 'translate(0, 0)'
            }}
            tickLine={false}
            type={type || layout === 'horizontal' ? 'number' : 'category'}
            width={(width ?? layout === 'horizontal') ? 35 : 80}
            {...props}
        />
    )
}

const CartesianGrid = ({ className, ...props }: CartesianGridPrimitiveProps) => {
    const { layout } = useChart()
    return (
        <CartesianGridPrimitive
            className={cn('stroke-1 stroke-muted', className)}
            horizontal={layout !== 'vertical'}
            vertical={layout === 'vertical'}
            {...props}
        />
    )
}

const ChartTooltipContent = <TValue extends ValueType, TName extends NameType>({
    payload,
    className,
    indicator = 'dot',
    hideLabel = false,
    hideIndicator = false,
    label,
    labelSeparator = true,
    labelFormatter,
    labelClassName,
    formatter,
    color,
    nameKey,
    labelKey,
    ref
}: TooltipContentProps<TValue, TName> &
    React.ComponentProps<'div'> & {
        hideLabel?: boolean
        labelSeparator?: boolean
        hideIndicator?: boolean
        indicator?: 'line' | 'dot' | 'dashed'
        nameKey?: string
        labelKey?: string
    }) => {
    const { config } = useChart()

    const tooltipLabel = useMemo(() => {
        if (hideLabel || !payload?.length) {
            return null
        }

        const [item] = payload

        if (!item) {
            return null
        }

        const key = `${labelKey || item.dataKey || item.name || 'value'}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)
        const value =
            !labelKey && typeof label === 'string'
                ? config[label as keyof typeof config]?.label || label
                : itemConfig?.label

        if (labelFormatter) {
            return <div className={labelClassName}>{labelFormatter(value, payload)}</div>
        }

        if (!value) {
            return null
        }

        return <div className={labelClassName}>{value}</div>
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

    if (!payload?.length) {
        return null
    }

    const nestLabel = payload.length === 1 && indicator !== 'dot'

    return (
        <div
            className={cn(
                'inset-ring inset-ring-border grid min-w-[12rem] items-start rounded-lg bg-popover p-3 text-popover-foreground text-xs dark:inset-ring-foreground/10 dark:supports-[backdrop-blur]:bg-popover/70 dark:supports-[backdrop-blur]:backdrop-blur-xl',
                className
            )}
            ref={ref}
        >
            {!nestLabel ? <span>{tooltipLabel}</span> : null}
            {labelSeparator && <Separator className='mt-2 mb-2.5 bg-foreground/10' />}
            <div className='grid gap-1.5'>
                {payload.map((item, index) => {
                    const key = `${nameKey || item.name || item.dataKey || 'value'}`
                    const itemConfig = getPayloadConfigFromPayload(config, item, key)
                    const indicatorColor = color || item.payload.fill || item.color

                    return (
                        <div
                            className={cn(
                                'flex w-full flex-wrap items-stretch gap-2 *:data-[slot=icon]:size-2.5 *:data-[slot=icon]:text-muted-foreground',
                                indicator === 'dot' && 'items-center'
                            )}
                            key={key}
                        >
                            {formatter && item?.value !== undefined && item.name ? (
                                formatter(item.value, item.name, item, index, item.payload)
                            ) : (
                                <>
                                    {itemConfig?.icon ? (
                                        <itemConfig.icon />
                                    ) : (
                                        !hideIndicator && (
                                            <div
                                                className={cn(
                                                    'shrink-0 rounded-full border-(--color-border) bg-(--color-bg)',
                                                    indicator === 'dot' && 'size-2.5',
                                                    indicator === 'line' && 'w-1',
                                                    indicator === 'dashed' &&
                                                        'w-0 border-[1.5px] border-dashed bg-transparent',
                                                    nestLabel && indicator === 'dashed' && 'my-0.5'
                                                )}
                                                style={
                                                    {
                                                        '--color-bg': indicatorColor,
                                                        '--color-border': indicatorColor
                                                    } as React.CSSProperties
                                                }
                                            />
                                        )
                                    )}
                                    <div
                                        className={cn(
                                            'flex flex-1 justify-between leading-none',
                                            nestLabel ? 'items-end' : 'items-center'
                                        )}
                                    >
                                        <div className='grid gap-1.5'>
                                            {nestLabel ? tooltipLabel : null}
                                            <span className='text-muted-foreground'>
                                                {itemConfig?.label || item.name}
                                            </span>
                                        </div>

                                        {item.value && (
                                            <span className='font-medium font-mono text-foreground tabular-nums'>
                                                {item.value.toString()}
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

type ChartLegendContentProps = ToggleButtonGroupProps &
    Pick<LegendProps, 'align' | 'verticalAlign'> & {
        payload?: ReadonlyArray<LegendPayload>
        hideIcon?: boolean
        nameKey?: string
        ref?: React.Ref<any>
    }

const ChartLegendContent = ({
    className,
    hideIcon = false,
    payload,
    align = 'right',
    verticalAlign = 'bottom',
    nameKey,
    ref
}: ChartLegendContentProps) => {
    const { config, selectedLegend, onLegendSelect } = useChart()

    if (!payload?.length) {
        return null
    }

    return (
        <ToggleButtonGroup
            className={composeRenderProps(className, (classname) =>
                cn(
                    'flex flex-wrap items-center gap-x-1',
                    verticalAlign === 'top' ? 'pb-3' : 'pt-3',
                    align === 'right' ? 'justify-end' : align === 'left' ? 'justify-start' : 'justify-center',
                    classname
                )
            )}
            onSelectionChange={(v) => {
                const key = [...v][0]?.toString() ?? null
                onLegendSelect(key)
            }}
            ref={ref}
            selectedKeys={selectedLegend ? [selectedLegend] : undefined}
            selectionMode='single'
        >
            {payload.map((item: LegendPayload) => {
                const key = `${nameKey || item.dataKey || 'value'}`
                const itemConfig = getPayloadConfigFromPayload(config, item, key)

                return (
                    <ToggleButton
                        aria-label={'Legend Item'}
                        className={cn(
                            '*:data-[slot=icon]:-mx-0.5 flex items-center gap-2 rounded-sm px-2 py-1 text-muted-foreground *:data-[slot=icon]:size-2.5 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:text-muted-foreground',
                            'selected:bg-secondary/70 selected:text-secondary-foreground',
                            'hover:bg-secondary/70 hover:text-secondary-foreground'
                        )}
                        id={key}
                        key={key}
                    >
                        {itemConfig?.icon && !hideIcon ? (
                            <itemConfig.icon data-slot='icon' />
                        ) : (
                            <div
                                className='rounded-full'
                                data-slot='icon'
                                style={{
                                    backgroundColor: item.color
                                }}
                            />
                        )}
                        {itemConfig?.label}
                    </ToggleButton>
                )
            })}
        </ToggleButtonGroup>
    )
}

interface AreaChartProps<TValue extends ValueType, TName extends NameType> extends BaseChartProps<TValue, TName> {
    chartProps?: Omit<ComponentProps<typeof AreaChartPrimitive>, 'data' | 'stackOffset'>
    areaProps?: Partial<ComponentProps<typeof Area>>
    connectNulls?: boolean
    fillType?: 'gradient' | 'solid' | 'none'
    lineType?: CurveType
}

const AreaChart = <TValue extends ValueType, TName extends NameType>({
    data = [],
    dataKey,
    colors = DEFAULT_COLORS,
    connectNulls = false,
    type = 'default',
    className,

    fillType = 'gradient',
    config,
    children,

    areaProps,

    tooltip = true,
    tooltipProps,

    cartesianGridProps,

    legend = true,
    legendProps,

    intervalType = 'equidistantPreserveStart',

    valueFormatter = (value: number) => value.toString(),

    displayEdgeLabelsOnly = false,
    hideXAxis = false,
    xAxisProps,

    hideYAxis = false,
    yAxisProps,

    hideGridLines = false,
    lineType = 'linear',
    chartProps,
    ...props
}: AreaChartProps<TValue, TName>) => {
    const categoryColors = constructCategoryColors(Object.keys(config), colors)
    const stacked = type === 'stacked' || type === 'percent'
    const areaId = useId()
    const getFillContent = ({
        fillType,
        activeLegend,
        category
    }: {
        fillType: AreaChartProps<TValue, TName>['fillType']
        activeLegend: string | null
        category: string
    }) => {
        const stopOpacity = activeLegend && activeLegend !== category ? 0.1 : 0.5

        switch (fillType) {
            case 'none':
                return <stop stopColor='currentColor' stopOpacity={0} />
            case 'gradient':
                return (
                    <>
                        <stop offset='5%' stopColor='currentColor' stopOpacity={stopOpacity} />
                        <stop offset='95%' stopColor='currentColor' stopOpacity={0} />
                    </>
                )
            default:
                return <stop stopColor='currentColor' stopOpacity={stopOpacity} />
        }
    }

    return (
        <Chart className={cn('h-56 w-full', className)} config={config} data={data} dataKey={dataKey} {...props}>
            {({ onLegendSelect, selectedLegend }) => (
                <AreaChartPrimitive
                    data={data}
                    margin={{
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 5
                    }}
                    onClick={() => {
                        onLegendSelect(null)
                    }}
                    stackOffset={type === 'percent' ? 'expand' : undefined}
                    {...chartProps}
                >
                    {!hideGridLines && <CartesianGrid {...cartesianGridProps} strokeDasharray='3 3' />}
                    <XAxis
                        className='**:[text]:fill-muted-foreground'
                        displayEdgeLabelsOnly={displayEdgeLabelsOnly}
                        hide={hideXAxis}
                        intervalType={intervalType}
                        {...xAxisProps}
                    />
                    <YAxis
                        className='**:[text]:fill-muted-foreground'
                        hide={hideYAxis}
                        tickFormatter={type === 'percent' ? valueToPercent : valueFormatter}
                        {...yAxisProps}
                    />

                    {legend && (
                        <ChartLegend
                            content={typeof legend === 'boolean' ? <ChartLegendContent /> : legend}
                            {...legendProps}
                        />
                    )}

                    {tooltip && (
                        <ChartTooltip
                            content={
                                typeof tooltip === 'boolean' ? <ChartTooltipContent accessibilityLayer /> : tooltip
                            }
                            {...tooltipProps}
                        />
                    )}

                    {!children
                        ? Object.entries(config).map(([category, values]) => {
                              const categoryId = `${areaId}-${category.replace(/[^a-zA-Z0-9]/g, '')}`

                              const strokeOpacity = selectedLegend && selectedLegend !== category ? 0.1 : 1

                              return (
                                  <Fragment key={categoryId}>
                                      <defs>
                                          <linearGradient
                                              id={categoryId}
                                              style={{
                                                  color: getColorValue(values.color || categoryColors.get(category))
                                              }}
                                              x1='0'
                                              x2='0'
                                              y1='0'
                                              y2='1'
                                          >
                                              {getFillContent({
                                                  fillType,
                                                  activeLegend: selectedLegend,
                                                  category: category
                                              })}
                                          </linearGradient>
                                      </defs>
                                      <Area
                                          connectNulls={connectNulls}
                                          dataKey={category}
                                          dot={false}
                                          fill={`url(#${categoryId})`}
                                          isAnimationActive={true}
                                          name={category}
                                          stackId={stacked ? 'stack' : undefined}
                                          stroke={getColorValue(values.color || categoryColors.get(category))}
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          style={{
                                              strokeWidth: 2,
                                              strokeOpacity
                                          }}
                                          type={lineType}
                                          {...areaProps}
                                      />
                                  </Fragment>
                              )
                          })
                        : children}
                </AreaChartPrimitive>
            )}
        </Chart>
    )
}

interface BarChartProps<TValue extends ValueType, TName extends NameType> extends BaseChartProps<TValue, TName> {
    barCategoryGap?: number
    barRadius?: number
    barGap?: number
    barSize?: number
    barProps?: Partial<React.ComponentProps<typeof Bar>>

    chartProps?: Omit<ComponentProps<typeof BarChartPrimitive>, 'data' | 'stackOffset'>
}

const BarChart = <TValue extends ValueType, TName extends NameType>({
    data = [],
    dataKey,
    lineType = 'linear',
    colors = DEFAULT_COLORS,
    type = 'default',
    className,
    config,
    children,
    layout = 'horizontal',

    tooltip = true,
    tooltipProps,

    legend = true,
    legendProps,

    intervalType = 'equidistantPreserveStart',

    barCategoryGap = 5,
    barGap,
    barSize,
    barRadius,
    barProps,

    valueFormatter = (value: number) => value.toString(),

    displayEdgeLabelsOnly = false,
    xAxisProps,
    hideXAxis = false,

    yAxisProps,
    hideYAxis = false,

    hideGridLines = false,
    chartProps,
    ...props
}: BarChartProps<TValue, TName>) => {
    const categoryColors = constructCategoryColors(Object.keys(config), colors)

    const stacked = type === 'stacked' || type === 'percent'
    return (
        <Chart
            className={cn('w-full', className)}
            config={config}
            data={data}
            dataKey={dataKey}
            layout={layout}
            {...props}
        >
            {({ onLegendSelect, selectedLegend }) => (
                <BarChartPrimitive
                    barCategoryGap={barCategoryGap}
                    barGap={barGap}
                    barSize={barSize}
                    data={data}
                    layout={layout === 'radial' ? 'horizontal' : layout}
                    margin={{
                        bottom: 0,
                        left: 5,
                        right: 0,
                        top: 5
                    }}
                    onClick={() => {
                        onLegendSelect(null)
                    }}
                    stackOffset={type === 'percent' ? 'expand' : stacked ? 'sign' : undefined}
                    {...chartProps}
                >
                    {!hideGridLines && <CartesianGrid strokeDasharray='4 4' />}
                    <XAxis
                        className='**:[text]:fill-muted-foreground'
                        displayEdgeLabelsOnly={displayEdgeLabelsOnly}
                        hide={hideXAxis}
                        intervalType={intervalType}
                        {...xAxisProps}
                    />
                    <YAxis
                        className='**:[text]:fill-muted-foreground'
                        hide={hideYAxis}
                        tickFormatter={type === 'percent' ? valueToPercent : valueFormatter}
                        {...yAxisProps}
                    />

                    {legend && (
                        <ChartLegend
                            content={typeof legend === 'boolean' ? <ChartLegendContent /> : legend}
                            {...legendProps}
                        />
                    )}

                    {tooltip && (
                        <ChartTooltip
                            content={
                                typeof tooltip === 'boolean' ? <ChartTooltipContent accessibilityLayer /> : tooltip
                            }
                            {...tooltipProps}
                        />
                    )}

                    {!children
                        ? Object.entries(config).map(([category, values]) => {
                              return (
                                  <Bar
                                      dataKey={category}
                                      fill={getColorValue(values.color || categoryColors.get(category))}
                                      fillOpacity={selectedLegend && selectedLegend !== category ? 0.1 : 1}
                                      key={category}
                                      name={category}
                                      onClick={(_item, _number, event) => {
                                          event.stopPropagation()

                                          startTransition(() => {
                                              onLegendSelect(category)
                                          })
                                      }}
                                      radius={barRadius ?? (stacked ? undefined : 4)}
                                      stackId={stacked ? 'stack' : undefined}
                                      stroke={getColorValue(values.color || categoryColors.get(category))}
                                      strokeOpacity={selectedLegend && selectedLegend !== category ? 0.2 : 0}
                                      strokeWidth={1}
                                      {...barProps}
                                  />
                              )
                          })
                        : children}
                </BarChartPrimitive>
            )}
        </Chart>
    )
}

interface LineChartProps<TValue extends ValueType, TName extends NameType> extends BaseChartProps<TValue, TName> {
    connectNulls?: boolean
    lineProps?: LineProps
    chartProps?: Omit<React.ComponentProps<typeof LineChartPrimitive>, 'data' | 'stackOffset'>
}

const LineChart = <TValue extends ValueType, TName extends NameType>({
    data = [],
    dataKey,
    colors = DEFAULT_COLORS,
    connectNulls = false,
    type = 'default',
    className,
    config,
    children,

    tooltip = true,
    tooltipProps,

    legend = true,
    legendProps,

    intervalType = 'equidistantPreserveStart',

    valueFormatter = (value: number) => value.toString(),

    displayEdgeLabelsOnly = false,
    xAxisProps,
    hideXAxis = false,

    yAxisProps,
    hideYAxis = false,

    hideGridLines = false,
    chartProps,
    lineProps,
    ...props
}: LineChartProps<TValue, TName>) => {
    const categoryColors = constructCategoryColors(Object.keys(config), colors)

    return (
        <Chart className={cn('w-full', className)} config={config} data={data} dataKey={dataKey} {...props}>
            {({ onLegendSelect, selectedLegend }) => (
                <LineChartPrimitive
                    data={data}
                    margin={{
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 5
                    }}
                    onClick={() => {
                        onLegendSelect(null)
                    }}
                    stackOffset={type === 'percent' ? 'expand' : undefined}
                    {...chartProps}
                >
                    {!hideGridLines && <CartesianGrid strokeDasharray='4 4' />}
                    <XAxis
                        displayEdgeLabelsOnly={displayEdgeLabelsOnly}
                        hide={hideXAxis}
                        intervalType={intervalType}
                        {...xAxisProps}
                    />
                    <YAxis
                        hide={hideYAxis}
                        tickFormatter={type === 'percent' ? valueToPercent : valueFormatter}
                        {...yAxisProps}
                    />

                    {legend && (
                        <ChartLegend
                            content={typeof legend === 'boolean' ? <ChartLegendContent /> : legend}
                            {...legendProps}
                        />
                    )}

                    {tooltip && (
                        <ChartTooltip
                            content={
                                typeof tooltip === 'boolean' ? <ChartTooltipContent accessibilityLayer /> : tooltip
                            }
                            {...tooltipProps}
                        />
                    )}

                    {!children
                        ? Object.entries(config).map(([category, values]) => {
                              const strokeOpacity = selectedLegend && selectedLegend !== category ? 0.1 : 1

                              return (
                                  <Line
                                      connectNulls={connectNulls}
                                      dataKey={category}
                                      dot={false}
                                      key={category}
                                      name={category}
                                      stroke={getColorValue(values.color || categoryColors.get(category))}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      style={
                                          {
                                              strokeOpacity,
                                              strokeWidth: 2,
                                              '--line-color': getColorValue(
                                                  values.color || categoryColors.get(category)
                                              )
                                          } as React.CSSProperties
                                      }
                                      type='linear'
                                      {...lineProps}
                                  />
                              )
                          })
                        : children}
                </LineChartPrimitive>
            )}
        </Chart>
    )
}

const sumNumericArray = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0)

const calculateDefaultLabel = (data: any[], valueKey: string): number =>
    sumNumericArray(data.map((dataPoint) => dataPoint[valueKey]))

const parseLabelInput = (
    labelInput: string | undefined,
    valueFormatter: (value: number) => string,
    data: any[],
    valueKey: string
): string => labelInput || valueFormatter(calculateDefaultLabel(data, valueKey))

interface PieChartProps<TValue extends ValueType, TName extends NameType>
    extends Omit<
        BaseChartProps<TValue, TName>,
        | 'hideGridLines'
        | 'hideXAxis'
        | 'hideYAxis'
        | 'xAxisProps'
        | 'yAxisProps'
        | 'displayEdgeLabelsOnly'
        | 'legend'
        | 'legendProps'
    > {
    variant?: 'pie' | 'donut'
    nameKey?: string

    chartProps?: Omit<ComponentProps<typeof PieChartPrimitive>, 'data' | 'stackOffset'>

    label?: string
    showLabel?: boolean
    pieProps?: Omit<ComponentProps<typeof Pie>, 'data' | 'dataKey' | 'name'>
}

const PieChart = <TValue extends ValueType, TName extends NameType>({
    data = [],
    dataKey,
    colors = DEFAULT_COLORS,
    className,
    config,
    children,
    label,
    showLabel,

    tooltip = true,
    tooltipProps,

    variant = 'pie',
    nameKey,

    chartProps,

    valueFormatter = (value: number) => value.toString(),
    pieProps,
    ...props
}: PieChartProps<TValue, TName>) => {
    const parsedLabelInput = parseLabelInput(label, valueFormatter, data, dataKey)

    return (
        <Chart
            className={cn('aspect-square', className)}
            config={config}
            data={data}
            dataKey={dataKey}
            layout='radial'
            {...props}
        >
            {({ onLegendSelect }) => (
                <PieChartPrimitive
                    data={data}
                    margin={{
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    }}
                    onClick={() => {
                        onLegendSelect(null)
                    }}
                    {...chartProps}
                >
                    {showLabel && variant === 'donut' && (
                        <text
                            className='fill-foreground font-medium'
                            dominantBaseline='middle'
                            textAnchor='middle'
                            x='50%'
                            y='50%'
                        >
                            {parsedLabelInput}
                        </text>
                    )}
                    <Pie
                        cx={pieProps?.cx ?? '50%'}
                        cy={pieProps?.cy ?? '50%'}
                        data={data}
                        dataKey={dataKey}
                        endAngle={pieProps?.endAngle ?? -270}
                        innerRadius={variant === 'donut' ? '50%' : '0%'}
                        isAnimationActive
                        name={nameKey}
                        startAngle={pieProps?.startAngle ?? 90}
                        strokeLinejoin='round'
                        {...pieProps}
                    >
                        {data.map((_, index) => (
                            <Cell
                                fill={getColorValue(
                                    config?.[data[index]?.code || data[index]?.name]?.color ??
                                        colors[index % colors.length]
                                )}
                                key={`cell-${index}`}
                            />
                        ))}
                    </Pie>

                    {tooltip && (
                        <ChartTooltip
                            content={
                                typeof tooltip === 'boolean' ? (
                                    <ChartTooltipContent accessibilityLayer labelSeparator={false} />
                                ) : (
                                    tooltip
                                )
                            }
                            {...tooltipProps}
                        />
                    )}

                    {children}
                </PieChartPrimitive>
            )}
        </Chart>
    )
}

export { Chart, BarChart, AreaChart, LineChart, PieChart }
export type { BarChartProps, AreaChartProps, LineChartProps, PieChartProps }
