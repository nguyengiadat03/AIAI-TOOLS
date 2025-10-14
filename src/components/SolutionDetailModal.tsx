import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
export function SolutionDetailModal({ solution, isOpen, onClose }: { solution: any, isOpen: boolean, onClose: () => void }) {
  if (!solution || !solution.details) return null;
  const { details } = solution;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] bg-background text-foreground border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-tech-blue">{solution.title}</DialogTitle>
          <DialogDescription>{solution.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div>
            <h4 className="font-semibold mb-2">Use Cases</h4>
            <div className="flex flex-wrap gap-2">
              {details.useCases.map((uc: string) => <Badge key={uc} variant="secondary">{uc}</Badge>)}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="space-y-2">
              {details.features.map((feat: string) => (
                <li key={feat} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Pricing Tiers</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(details.pricingTiers).map(([tier, features]) => (
                <div key={tier} className="p-4 bg-secondary rounded-lg border border-border">
                  <h5 className="font-bold">{tier}</h5>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                    {(features as string[]).map((feat: string) => <li key={feat}>- {feat}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}