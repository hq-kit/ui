"use client";

import type Raws from "@/components/samples/generated/previews.json";
import { IconCode } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import { previews } from "@/components/samples/generated/previews";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CLI } from "./cli";
import { Code } from "./code-client";

type Raw = keyof typeof Raws;

export function Demo({ component }: { component: Raw }) {
  const Component = previews[component].component;
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiPath = useMemo(() => {
    const slug = component.split("/").map(encodeURIComponent).join("/");
    return `/api/preview/${slug}`;
  }, [component]);

  useEffect(() => {
    if (!isOpen || code || isLoading) return;
    setIsLoading(true);
    setError(null);
    fetch(apiPath)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load code");
        const data = (await res.json()) as { raw?: string };
        setCode(data.raw ?? "");
      })
      .catch(() => {
        setError("Failed to load code.");
      })
      .finally(() => setIsLoading(false));
  }, [apiPath, code, isLoading, isOpen]);

  return (
    <div className="group/demo relative overflow-hidden rounded-lg border shadow-sm">
      <div className="flex w-full items-center justify-between gap-1 overflow-hidden bg-accent/50 p-2 backdrop-blur-2xl">
        <Badge className="font-medium text-xs" variant="outline">
          {component.split("/").pop()}
        </Badge>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
          <Button size="icon-sm" variant="outline">
            <IconCode />
          </Button>
          <DialogContent className="sm:max-w-5xl">
            <DialogHeader>
              <DialogTitle>{component.split("/").pop()}</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <div className="mb-2 space-y-2">
                <h3 className="font-medium text-sm">CLI</h3>
                <CLI command="add" items={`${component.split("/").pop()}`} />
              </div>
              <div>
                <h3 className="font-medium text-sm">Manual Code</h3>
                {error ? (
                  <p className="text-destructive text-sm">{error}</p>
                ) : code ? (
                  <Code className="border shadow-sm" code={code} copy />
                ) : (
                  <div className="h-12 w-full animate-pulse rounded-lg border bg-muted" />
                )}
              </div>
            </DialogBody>
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative flex min-h-52 items-center justify-center px-8 py-12 has-data-[slot=card]:w-full has-data-[slot=chart]:p-2! has-data-[slot=command]:p-0! has-data-[slot=chart]:**:data-[slot=card]:w-full max-sm:px-4">
        <Component />
      </div>
    </div>
  );
}
