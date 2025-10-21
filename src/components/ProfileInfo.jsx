import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, CameraIcon } from "lucide-react"

export function ProfileInfo({ name, email, image }) {
  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center gap-4">
        <div className="relative p-1">
            <Avatar className=" h-14 w-14">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name?.[0]?.toUpperCase() || "U"}</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 p-1 bg-violet-500 hover:bg-violet-700 rounded-full"><Camera className="text-white w-4 h-4"/></span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-900">{name}</span>
          <span className="text-sm text-gray-500">{email}</span>
        </div>
      </div>
    </div>
  )
}
