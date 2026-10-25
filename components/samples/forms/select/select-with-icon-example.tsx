"use client"

import { IconBrandDiscord, IconBrandGithub, IconBrandGitlab } from "@tabler/icons-react"
import { Select } from "@/components/ui/select"

export default function SelectWithIconDemo() {
  return (
    <Select aria-label="Devices" defaultValue="desktop" placeholder="Select a device">
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        <Select.Item id="discord" textValue="Discord">
          <IconBrandDiscord />
          Discord
        </Select.Item>
        <Select.Separator />
        <Select.Item id="github" textValue="GitHub">
          <IconBrandGithub />
          Github
        </Select.Item>
        <Select.Item id="gitlab" textValue="GitLab">
          <IconBrandGitlab />
          GitLab
        </Select.Item>
      </Select.Content>
    </Select>
  )
}
