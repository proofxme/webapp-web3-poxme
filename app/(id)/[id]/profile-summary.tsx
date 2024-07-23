import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { IIdentityCore } from "app/api/interfaces/identity"

export function ProfileSummary({id}: {id: IIdentityCore}) {
  return (
    <Card className="mb-4">
      <CardHeader>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={id.avatar} />
            <AvatarFallback>{id.displayName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-bold">{id.displayName}</h3>
          </div>
        </div>
        <p className="text-muted-foreground">{id.bio}</p>
        <div className="flex flex-wrap gap-2">
        </div>
      </CardContent>
    </Card>
  )
}