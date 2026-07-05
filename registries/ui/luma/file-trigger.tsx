"use client"

import type { Ref } from "react"
import type { VariantProps } from "tailwind-variants"
import {
  FileTrigger as RACFileTrigger,
  type FileTriggerProps as RACFileTriggerProps
} from "react-aria-components/FileTrigger"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button, type buttonVariants } from "./button"

export interface FileTriggerProps extends RACFileTriggerProps, VariantProps<typeof buttonVariants> {
  isDisabled?: boolean
  isPending?: boolean
  ref?: Ref<HTMLInputElement>
  className?: string
}

export function FileTrigger({ variant = "outline", size = "default", ref, className, ...props }: FileTriggerProps) {
  return (
    <RACFileTrigger ref={ref} {...props}>
      <Button
        className={className}
        isDisabled={props.isDisabled}
        isPending={props.isPending}
        size={size}
        variant={variant}
      >
        {props.defaultCamera ? (
          <IconPlaceholder
            hugeicons="Camera01Icon"
            lucide="CameraIcon"
            phosphor="CameraIcon"
            remixicon="RiCameraLine"
            tabler="IconCamera"
          />
        ) : props.acceptDirectory ? (
          <IconPlaceholder
            hugeicons="Folder01Icon"
            lucide="FolderIcon"
            phosphor="FolderIcon"
            remixicon="RiFolderLine"
            tabler="IconFolder"
          />
        ) : (
          <IconPlaceholder
            hugeicons="Attachment01Icon"
            lucide="PaperclipIcon"
            phosphor="PaperclipIcon"
            remixicon="RiAttachment2"
            tabler="IconPaperclip"
          />
        )}
        {props.children}
      </Button>
    </RACFileTrigger>
  )
}
