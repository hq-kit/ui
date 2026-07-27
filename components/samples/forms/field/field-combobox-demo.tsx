"use client"

import type { Key } from "@/components/ui/select"
import { IconUser } from "@tabler/icons-react"
import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem
} from "@/components/ui/combobox"
import { Description, FieldError, FieldSet, Form, Label } from "@/components/ui/field"

export default function FieldComboboxDemo() {
  const [user, setUser] = useState<Key | null>()
  const [distro, setDistro] = useState<Key[] | undefined>()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify({ user, distro }, null, 2)
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldSet>
        <Combobox isRequired onChange={setUser} value={user}>
          <Label>User</Label>
          <ComboboxInput placeholder="Choose department" />
          <ComboboxContent items={options}>
            {(item) => (
              <ComboboxItem textValue={item.name}>
                <Avatar>
                  <Avatar.Image alt={item.name} src={item.image_url} />
                  <Avatar.Fallback>
                    <IconUser />
                  </Avatar.Fallback>
                </Avatar>
                {item.name}
              </ComboboxItem>
            )}
          </ComboboxContent>
          <Description>Select user for this job</Description>
          <FieldError />
        </Combobox>
        <Combobox
          allowsEmptyCollection
          aria-label="Distros"
          isRequired
          onChange={setDistro}
          selectionMode="multiple"
          value={distro}
        >
          <Label>Distros</Label>
          <ComboboxChips<(typeof distros)[0]>>{(value) => <ComboboxChip>{value.name}</ComboboxChip>}</ComboboxChips>
          <ComboboxContent items={distros}>{(item) => <ComboboxItem>{item.name}</ComboboxItem>}</ComboboxContent>
          <FieldError />
        </Combobox>
        <Button type="submit">Submit</Button>
      </FieldSet>
    </Form>
  )
}

const options = [
  { id: 1, name: "Barbara Kirlin Sr.", image_url: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Rosemarie Koch", image_url: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Mrs. Reva Heaney Jr.", image_url: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ms. Ettie Abshire DVM", image_url: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Bria Ziemann", image_url: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Heloise Borer Sr.", image_url: "https://i.pravatar.cc/150?img=6" },
  {
    id: 7,
    name: "Miss Jacinthe Gerlach DVM",
    image_url: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 8,
    name: "Miss Stephania Schaefer Sr.",
    image_url: "https://i.pravatar.cc/150?img=8"
  },
  { id: 9, name: "Kevon Hackett MD", image_url: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Tom Ledner", image_url: "https://i.pravatar.cc/150?img=10" }
]

const distros = [
  { id: 1, name: "Ubuntu" },
  { id: 2, name: "Debian" },
  { id: 3, name: "Fedora" },
  { id: 4, name: "Arch" },
  { id: 5, name: "CentOS" },
  { id: 6, name: "Gentoo" },
  { id: 7, name: "OpenSuse" },
  { id: 8, name: "Redhat" },
  { id: 9, name: "FreeBSD" },
  { id: 10, name: "NetBSD" }
]
