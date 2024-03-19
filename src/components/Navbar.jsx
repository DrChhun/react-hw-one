import { UserProfile } from "./UserProfile"

export const Navbar = () => {
    return (
        <div className="w-full flex justify-between py-4">
            <h2 className="text-2xl font-semibold">Portfolio</h2>
            <UserProfile name={"Jong Suk"} />
        </div>
    )
}