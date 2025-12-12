import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Welcome to Your App</h2>
        <p className="text-xl text-muted-foreground">
          A modern Next.js 15 + React 19 + shadcn/ui starter template.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>40+ UI Components</CardTitle>
            <CardDescription>
              Pre-configured shadcn/ui components ready to use.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Buttons, forms, dialogs, navigation, data display, and more.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dark Mode Ready</CardTitle>
            <CardDescription>
              Built-in dark mode support with next-themes.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              CSS variables for easy theme customization.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Production Ready</CardTitle>
            <CardDescription>
              TypeScript, ESLint, and best practices included.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Deploy to Vercel with one click.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">Documentation</Button>
      </div>
    </div>
  )
}
