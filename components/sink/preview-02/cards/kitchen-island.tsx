"use client"

import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemActions, ItemContent, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { type Selection, ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const SCENES = {
  cooking: { brightness: [90], colorTemp: [70], volume: [30], fade: [0] },
  dining: { brightness: [50], colorTemp: [40], volume: [20], fade: [60] },
  nightlight: { brightness: [15], colorTemp: [20], volume: [0], fade: [80] },
  focus: { brightness: [100], colorTemp: [85], volume: [0], fade: [0] }
} as const

export function KitchenIsland() {
  const [enabled, setEnabled] = useState(true)
  const [scene, setScene] = useState("cooking")
  const [brightness, setBrightness] = useState([90])
  const [colorTemp, setColorTemp] = useState([70])
  const [volume, setVolume] = useState([30])
  const [fade, setFade] = useState([0])

  const handleSceneChange = (value: Selection) => {
    if (!value) return
    setScene([...value].join(""))
    const preset = SCENES[[...value].join("") as keyof typeof SCENES]
    setBrightness([...preset.brightness])
    setColorTemp([...preset.colorTemp])
    setVolume([...preset.volume])
    setFade([...preset.fade])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kitchen Island</CardTitle>
        <CardDescription>Hue Color Ambient</CardDescription>
        <CardAction>
          <Switch isSelected={enabled} onChange={setEnabled} />
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="sr-only">Scenes</span>
          <ToggleGroup
            className="flex-wrap"
            onSelectionChange={handleSceneChange}
            selectedKeys={[scene]}
            selectionMode="single"
            spacing={1}
            variant="outline"
          >
            <ToggleGroupItem id="cooking" isDisabled={!enabled}>
              Cooking
            </ToggleGroupItem>
            <ToggleGroupItem id="dining" isDisabled={!enabled}>
              Dining
            </ToggleGroupItem>
            <ToggleGroupItem id="nightlight" isDisabled={!enabled}>
              Nightlight
            </ToggleGroupItem>
            <ToggleGroupItem id="focus" isDisabled={!enabled}>
              Focus
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <ItemGroup>
          <Item size="sm" variant="outline">
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="Sun03Icon"
                lucide="SunIcon"
                phosphor="SunIcon"
                remixicon="RiSunLine"
                tabler="IconSun"
              />
            </ItemMedia>
            <ItemContent className="flex-row items-center gap-3">
              <ItemTitle className="shrink-0">Brightness</ItemTitle>
            </ItemContent>
            <ItemActions className="flex-1">
              <Slider
                className="w-full"
                isDisabled={!enabled}
                maxValue={100}
                onChange={(e) => setBrightness(e as number[])}
                value={brightness}
              />
            </ItemActions>
          </Item>
          <Item size="sm" variant="outline">
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="ThermometerWarmIcon"
                lucide="ThermometerIcon"
                phosphor="ThermometerIcon"
                remixicon="RiThermometerLine"
                tabler="IconThermometer"
              />
            </ItemMedia>
            <ItemContent className="flex-row items-center gap-3">
              <ItemTitle className="shrink-0">Color Temp</ItemTitle>
            </ItemContent>
            <ItemActions className="flex-1">
              <Slider
                isDisabled={!enabled}
                maxValue={100}
                onChange={(e) => setColorTemp(e as number[])}
                value={colorTemp}
              />
            </ItemActions>
          </Item>
          <Item size="sm" variant="outline">
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="VolumeHighIcon"
                lucide="Volume2Icon"
                phosphor="SpeakerHighIcon"
                remixicon="RiVolumeUpLine"
                tabler="IconVolume"
              />
            </ItemMedia>
            <ItemContent className="flex-row items-center gap-3">
              <ItemTitle className="shrink-0">Volume</ItemTitle>
            </ItemContent>
            <ItemActions className="flex-1">
              <Slider isDisabled={!enabled} maxValue={100} onChange={(e) => setVolume(e as number[])} value={volume} />
            </ItemActions>
          </Item>
          <Item size="sm" variant="outline">
            <ItemMedia variant="icon">
              <IconPlaceholder
                hugeicons="Clock03Icon"
                lucide="TimerIcon"
                phosphor="TimerIcon"
                remixicon="RiTimerLine"
                tabler="IconClock"
              />
            </ItemMedia>
            <ItemContent className="flex-row items-center gap-3">
              <ItemTitle className="shrink-0">Fade</ItemTitle>
            </ItemContent>
            <ItemActions className="flex-1">
              <Slider isDisabled={!enabled} maxValue={100} onChange={(e) => setFade(e as number[])} value={fade} />
            </ItemActions>
          </Item>
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
