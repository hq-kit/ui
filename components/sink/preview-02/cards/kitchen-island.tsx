"use client"

import { useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Card } from "@/components/ui/card"
import { Item } from "@/components/ui/item"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { type Key, ToggleGroup } from "@/components/ui/toggle-group"

const SCENES = {
  cooking: { brightness: [90], colorTemp: [70], volume: [30], fade: [0] },
  dining: { brightness: [50], colorTemp: [40], volume: [20], fade: [60] },
  nightlight: { brightness: [15], colorTemp: [20], volume: [0], fade: [80] },
  focus: { brightness: [100], colorTemp: [85], volume: [0], fade: [0] }
} as const

export function KitchenIsland() {
  const [enabled, setEnabled] = useState(true)
  const [scene, setScene] = useState(new Set<Key>("cooking"))
  const [brightness, setBrightness] = useState([90])
  const [colorTemp, setColorTemp] = useState([70])
  const [volume, setVolume] = useState([30])
  const [fade, setFade] = useState([0])

  const handleSceneChange = (value: Set<Key>) => {
    if (!value) return
    setScene(value)
    const preset = SCENES[[...value].join("") as keyof typeof SCENES]
    setBrightness([...preset.brightness])
    setColorTemp([...preset.colorTemp])
    setVolume([...preset.volume])
    setFade([...preset.fade])
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Kitchen Island</Card.Title>
        <Card.Description>Hue Color Ambient</Card.Description>
        <Card.Action>
          <Switch isSelected={enabled} onChange={setEnabled} />
        </Card.Action>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="sr-only">Scenes</span>
          <ToggleGroup
            className="flex-wrap"
            onSelectionChange={handleSceneChange}
            selectedKeys={scene}
            selectionMode="single"
            spacing={1}
            variant="outline"
          >
            <ToggleGroup.Item id="cooking" isDisabled={!enabled}>
              Cooking
            </ToggleGroup.Item>
            <ToggleGroup.Item id="dining" isDisabled={!enabled}>
              Dining
            </ToggleGroup.Item>
            <ToggleGroup.Item id="nightlight" isDisabled={!enabled}>
              Nightlight
            </ToggleGroup.Item>
            <ToggleGroup.Item id="focus" isDisabled={!enabled}>
              Focus
            </ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <Item.Group>
          <Item size="sm" variant="outline">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="Sun03Icon"
                lucide="SunIcon"
                phosphor="SunIcon"
                remixicon="RiSunLine"
                tabler="IconSun"
              />
            </Item.Media>
            <Item.Content className="flex-row items-center gap-3">
              <Item.Title className="shrink-0">Brightness</Item.Title>
            </Item.Content>
            <Item.Actions className="flex-1">
              <Slider
                className="w-full"
                isDisabled={!enabled}
                maxValue={100}
                onChange={(e) => setBrightness(e as number[])}
                value={brightness}
              />
            </Item.Actions>
          </Item>
          <Item size="sm" variant="outline">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="ThermometerWarmIcon"
                lucide="ThermometerIcon"
                phosphor="ThermometerIcon"
                remixicon="RiThermometerLine"
                tabler="IconThermometer"
              />
            </Item.Media>
            <Item.Content className="flex-row items-center gap-3">
              <Item.Title className="shrink-0">Color Temp</Item.Title>
            </Item.Content>
            <Item.Actions className="flex-1">
              <Slider
                isDisabled={!enabled}
                maxValue={100}
                onChange={(e) => setColorTemp(e as number[])}
                value={colorTemp}
              />
            </Item.Actions>
          </Item>
          <Item size="sm" variant="outline">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="VolumeHighIcon"
                lucide="Volume2Icon"
                phosphor="SpeakerHighIcon"
                remixicon="RiVolumeUpLine"
                tabler="IconVolume"
              />
            </Item.Media>
            <Item.Content className="flex-row items-center gap-3">
              <Item.Title className="shrink-0">Volume</Item.Title>
            </Item.Content>
            <Item.Actions className="flex-1">
              <Slider isDisabled={!enabled} maxValue={100} onChange={(e) => setVolume(e as number[])} value={volume} />
            </Item.Actions>
          </Item>
          <Item size="sm" variant="outline">
            <Item.Media variant="icon">
              <IconPlaceholder
                hugeicons="Clock03Icon"
                lucide="TimerIcon"
                phosphor="TimerIcon"
                remixicon="RiTimerLine"
                tabler="IconClock"
              />
            </Item.Media>
            <Item.Content className="flex-row items-center gap-3">
              <Item.Title className="shrink-0">Fade</Item.Title>
            </Item.Content>
            <Item.Actions className="flex-1">
              <Slider isDisabled={!enabled} maxValue={100} onChange={(e) => setFade(e as number[])} value={fade} />
            </Item.Actions>
          </Item>
        </Item.Group>
      </Card.Content>
    </Card>
  )
}
