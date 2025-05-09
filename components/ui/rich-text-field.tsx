'use client'

import { CodeHighlightNode, CodeNode } from '@lexical/code'
import {
    IconBold,
    IconHeading1,
    IconHeading2,
    IconHeading3,
    IconItalic,
    IconList,
    IconListOrdered,
    IconParagraph,
    IconRedo,
    IconStrikethrough,
    IconSubscript,
    IconSuperscript,
    IconTextQuote,
    IconUnderline,
    IconUndo
} from 'hq-icons'
import {
    $createParagraphNode,
    $getRoot,
    $getSelection,
    $insertNodes,
    $isRangeSelection,
    $isRootOrShadowRoot,
    CAN_REDO_COMMAND,
    CAN_UNDO_COMMAND,
    COMMAND_PRIORITY_CRITICAL,
    FORMAT_TEXT_COMMAND,
    REDO_COMMAND,
    SELECTION_CHANGE_COMMAND,
    UNDO_COMMAND
} from 'lexical'
import { useCallback, useEffect, useState } from 'react'
import { TextField, type ValidationResult } from 'react-aria-components'

import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import {
    $isListNode,
    INSERT_ORDERED_LIST_COMMAND,
    INSERT_UNORDERED_LIST_COMMAND,
    ListItemNode,
    ListNode,
    REMOVE_LIST_COMMAND
} from '@lexical/list'
import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown'
import { type InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import type { HeadingTagType } from '@lexical/rich-text'
import { $createHeadingNode, $createQuoteNode, $isHeadingNode, HeadingNode, QuoteNode } from '@lexical/rich-text'
import { $setBlocksType } from '@lexical/selection'
import { $findMatchingParent, $getNearestNodeOfType, mergeRegister } from '@lexical/utils'

import { cn } from '@/lib/utils'
import { Button } from './button'
import { Description, FieldError, Label } from './form'
import { Menu } from './menu'
import { Toolbar } from './toolbar'

interface RichTextFieldProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    isDisabled?: boolean
    returnType?: 'markdown' | 'html'
    hideToolbar?: boolean
    as?: 'rich-text' | 'plain-text'
}

const RichTextField = ({
    className,
    label,
    description,
    errorMessage,
    isDisabled = false,
    returnType = 'html',
    hideToolbar = false,
    as = 'rich-text',
    ...props
}: RichTextFieldProps) => {
    const config: InitialConfigType = {
        editable: !isDisabled,
        namespace: 'rich-text-field',
        theme: {
            text: {
                strikethrough: 'line-through',
                underline: 'underline'
            }
        },
        nodes: [HeadingNode, ListNode, ListItemNode, QuoteNode, CodeNode, CodeHighlightNode, AutoLinkNode, LinkNode],
        onError: (error) => {
            console.error(error)
        }
    }

    return (
        <LexicalComposer initialConfig={config}>
            <div>
                <div className='relative'>
                    {as === 'rich-text' ? (
                        <RichTextPlugin
                            placeholder={<p className='absolute bottom-2 left-3 text-muted-fg'>Write something...</p>}
                            contentEditable={
                                <TextField
                                    aria-label='Editor'
                                    id='parent'
                                    className={cn('group relative flex flex-col gap-1', className)}
                                >
                                    {label && <Label>{label}</Label>}

                                    {!hideToolbar && <ToolbarPlugin />}
                                    <ContentEditable
                                        autoFocus
                                        aria-disabled={isDisabled}
                                        disabled={isDisabled}
                                        className={cn(
                                            'min-h-32 w-full min-w-0 rounded-lg border bg-bg px-2.5 py-2 text-base outline-none transition focus:outline-none sm:text-sm',
                                            'focus:border-primary/70 focus:ring-4 focus:ring-ring',
                                            'invalid:border-danger invalid:ring-4 invalid:ring-invalid',
                                            isDisabled ? 'opacity-50' : 'hover:border-primary/60 '
                                        )}
                                    />
                                    {description && <Description>{description}</Description>}
                                    <FieldError>{errorMessage}</FieldError>
                                </TextField>
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                    ) : (
                        <PlainTextPlugin
                            placeholder={<p className='absolute bottom-2 left-3 text-muted-fg'>Write something...</p>}
                            contentEditable={
                                <TextField
                                    aria-label='Editor'
                                    id='parent'
                                    className={cn('group relative flex flex-col gap-1', className)}
                                >
                                    {label && <Label>{label}</Label>}

                                    {!hideToolbar && <Toolbar />}
                                    <ContentEditable
                                        autoFocus
                                        aria-disabled={isDisabled}
                                        disabled={isDisabled}
                                        className={cn(
                                            'min-h-32 w-full min-w-0 rounded-lg border bg-bg px-2.5 py-2 text-base shadow-sm outline-none transition focus:outline-none sm:text-sm',
                                            'focus:border-primary/70 focus:ring-4 focus:ring-primary/20',
                                            'invalid:border-danger invalid:ring-4 invalid:ring-invalid',
                                            isDisabled ? 'opacity-50' : 'hover:border-primary/60 '
                                        )}
                                    />
                                    {description && <Description>{description}</Description>}
                                    <FieldError>{errorMessage}</FieldError>
                                </TextField>
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                    )}
                    <HistoryPlugin />
                </div>
                <ListPlugin />
                <LinkPlugin />
                {as === 'rich-text' && <MarkdownShortcutPlugin transformers={TRANSFORMERS} />}
                <OnChange returnType={returnType} value={props.value} onChange={props.onChange} />
            </div>
        </LexicalComposer>
    )
}

interface OnChangeProps {
    value?: string
    onChange?: (value: string) => void
    returnType: 'markdown' | 'html'
}

function OnChange({ value, onChange, returnType }: OnChangeProps) {
    const [editor] = useLexicalComposerContext()
    const [isFirstRender, setIsFirstRender] = useState(true)

    useEffect(() => {
        if (returnType === 'html') {
            if (!value || !isFirstRender) return

            setIsFirstRender(false)
            editor.update(() => {
                const currentHTML = $generateHtmlFromNodes(editor)
                if (currentHTML !== value) {
                    $getRoot().clear()
                    const parser = new DOMParser()
                    const dom = parser.parseFromString(value, 'text/html')
                    const nodes = $generateNodesFromDOM(editor, dom)
                    $insertNodes(nodes)
                }
            })
        }
    }, [editor, value, isFirstRender, returnType])

    useEffect(() => {
        setIsFirstRender(true)
    }, [])

    return (
        <OnChangePlugin
            onChange={(editorState) => {
                editorState.read(() => {
                    onChange?.(
                        returnType === 'markdown'
                            ? $convertToMarkdownString(TRANSFORMERS, undefined, true)
                            : $generateHtmlFromNodes(editor)
                    )
                })
            }}
        />
    )
}

function BlockTypeDropdown({ blockType }: { blockType: string }) {
    const blockIcons = {
        h1: <IconHeading1 />,
        h2: <IconHeading2 />,
        h3: <IconHeading3 />,
        paragraph: <IconParagraph />,
        bullet: <IconList />,
        number: <IconListOrdered />,
        quote: <IconTextQuote />
    }
    const [editor] = useLexicalComposerContext()

    const formatHeading = (headingLevel: HeadingTagType) => {
        editor.update(() => {
            const selection = $getSelection()
            $setBlocksType(selection, () => $createHeadingNode(headingLevel))
        })
    }

    const formatParagraph = () => {
        editor.update(() => {
            const selection = $getSelection()
            $setBlocksType(selection, () => $createParagraphNode())
        })
    }

    const formatOrderedList = () => {
        if (blockType !== 'number') {
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
        } else {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
        }
    }

    const formatUnorderedList = () => {
        if (blockType !== 'bullet') {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
        } else {
            editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)
        }
    }

    const formatQuote = () => {
        editor.update(() => {
            const selection = $getSelection()
            $setBlocksType(selection, () => $createQuoteNode())
        })
    }

    return (
        <Menu>
            <Button isDisabled={!editor.isEditable()} variant='outline' size='sm' icon>
                {blockIcons[blockType as keyof typeof blockIcons]}
            </Button>
            <Menu.Content selectionMode='single' aria-label='Block type' selectedKeys={[blockType]}>
                <Menu.Item id='paragraph' onAction={formatParagraph}>
                    <IconParagraph />
                    <Menu.Label>Paragraph</Menu.Label>
                </Menu.Item>
                <Menu.Item id='h1' onAction={() => formatHeading('h1')}>
                    <IconHeading1 />
                    <Menu.Label>Heading 1</Menu.Label>
                </Menu.Item>
                <Menu.Item id='h2' onAction={() => formatHeading('h2')}>
                    <IconHeading2 />
                    <Menu.Label>Heading 2</Menu.Label>
                </Menu.Item>
                <Menu.Item id='h3' onAction={() => formatHeading('h3')}>
                    <IconHeading3 />
                    <Menu.Label>Heading 3</Menu.Label>
                </Menu.Item>
                <Menu.Item id='bullet' onAction={formatUnorderedList}>
                    <IconList />
                    <Menu.Label>Unordered List</Menu.Label>
                </Menu.Item>
                <Menu.Item id='number' onAction={formatOrderedList}>
                    <IconListOrdered />
                    <Menu.Label>Ordered List</Menu.Label>
                </Menu.Item>
                <Menu.Item id='quote' onAction={formatQuote}>
                    <IconTextQuote />
                    <Menu.Label>Quote</Menu.Label>
                </Menu.Item>
            </Menu.Content>
        </Menu>
    )
}

export function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext()
    const [formatText, setFormatText] = useState({
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
        subscript: false,
        superscript: false
    })
    const [blockType, setBlockType] = useState<string>('paragraph')

    const [canUndo, setCanUndo] = useState<boolean>(false)
    const [canRedo, setCanRedo] = useState<boolean>(false)

    const $updateToolbar = useCallback(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
            setFormatText({
                bold: selection.hasFormat('bold'),
                italic: selection.hasFormat('italic'),
                underline: selection.hasFormat('underline'),
                strikethrough: selection.hasFormat('strikethrough'),
                subscript: selection.hasFormat('subscript'),
                superscript: selection.hasFormat('superscript')
            })
            const anchorNode = selection.anchor.getNode()

            let element =
                anchorNode.getKey() === 'root'
                    ? anchorNode
                    : $findMatchingParent(anchorNode, (e) => {
                          const parent = e.getParent()
                          return parent !== null && $isRootOrShadowRoot(parent)
                      })

            if (element === null) {
                element = anchorNode.getTopLevelElementOrThrow()
            }

            const elementDOM = editor.getElementByKey(element.getKey())

            if (elementDOM !== null) {
                if ($isListNode(element)) {
                    const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode)
                    const type = parentList ? parentList.getListType() : element.getListType()
                    setBlockType(type)
                } else {
                    const type = $isHeadingNode(element) ? element.getTag() : element.getType()
                    setBlockType(type)
                }
            }
        }
    }, [editor])

    useEffect(() => {
        return mergeRegister(
            editor.registerCommand(
                SELECTION_CHANGE_COMMAND,
                () => {
                    $updateToolbar()
                    return false
                },
                COMMAND_PRIORITY_CRITICAL
            ),
            editor.registerUpdateListener(({ editorState }) => {
                editorState.read(() => {
                    $updateToolbar()
                })
            })
        )
    }, [editor, $updateToolbar])

    useEffect(() => {
        return mergeRegister(
            editor.registerCommand(
                CAN_UNDO_COMMAND,
                (payload) => {
                    setCanUndo(payload)
                    return false
                },
                COMMAND_PRIORITY_CRITICAL
            ),
            editor.registerCommand(
                CAN_REDO_COMMAND,
                (payload) => {
                    setCanRedo(payload)
                    return false
                },
                COMMAND_PRIORITY_CRITICAL
            )
        )
    }, [editor])

    return (
        <Toolbar className='mb-2' aria-label='Toolbar'>
            <Toolbar.Group icon aria-label='Formats'>
                <BlockTypeDropdown blockType={blockType} />
                <Toolbar.Item
                    isDisabled={!editor.isEditable()}
                    isSelected={formatText.bold}
                    onChange={() => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
                    }}
                >
                    <IconBold />
                </Toolbar.Item>
                <Toolbar.Item
                    isDisabled={!editor.isEditable()}
                    isSelected={formatText.italic}
                    onChange={() => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
                    }}
                >
                    <IconItalic />
                </Toolbar.Item>
                <Toolbar.Item
                    isDisabled={!editor.isEditable()}
                    isSelected={formatText.underline}
                    onChange={() => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
                    }}
                >
                    <IconUnderline />
                </Toolbar.Item>
                <Toolbar.Item
                    isDisabled={!editor.isEditable()}
                    isSelected={formatText.strikethrough}
                    onChange={() => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
                    }}
                >
                    <IconStrikethrough />
                </Toolbar.Item>
                <Toolbar.Item
                    isDisabled={!editor.isEditable()}
                    isSelected={formatText.subscript}
                    onChange={() => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript')
                    }}
                >
                    <IconSubscript />
                </Toolbar.Item>
                <Toolbar.Item
                    isDisabled={!editor.isEditable()}
                    isSelected={formatText.superscript}
                    onChange={() => {
                        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript')
                    }}
                >
                    <IconSuperscript />
                </Toolbar.Item>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Group aria-label='Actions'>
                <Toolbar.Item
                    icon
                    isDisabled={!canUndo || !editor.isEditable()}
                    isSelected={false}
                    onPress={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
                >
                    <IconUndo />
                </Toolbar.Item>
                <Toolbar.Item
                    icon
                    isDisabled={!canRedo || !editor.isEditable()}
                    isSelected={false}
                    onPress={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
                >
                    <IconRedo />
                </Toolbar.Item>
            </Toolbar.Group>
        </Toolbar>
    )
}

export { RichTextField }
