import { Link } from "react-router-dom"
import { MenuListItem } from "../Component/MenuListItem"
const UserInfo = () => {

    return (
        <main
            className="grid  bg-gradient-to-l from-sky-400 to-blue-500 h-screen w-screen "
            style={{
                gridTemplateColumns: "30% 1fr",
            }}
        >
            <aside
                className=" p-4 w-3/5 flex flex-col mh-1/2 h-fit relative top-1/2 -translate-y-1/2 rounded-lg left-full -translate-x-full"
            >

                <menu
                    className="flex flex-col gap-2 items-end"
                >
                    <Link
                        to="/"
                        className="text-white text-xl bg-blue-600 rounded-full px-4 mb-4 w-fit text-center align-middle cursor-pointer hover:bg-zinc-600"
                    >
                        Back
                    </Link>
                    <MenuListItem name={"User Info"} />
                    <MenuListItem name={"Pallettes"} />
                    <MenuListItem name={"Payments"} />
                    <MenuListItem name={"Privacy"} />
                    <MenuListItem name={"Account"} />
                </menu>
            </aside>
            <section>

            </section>
        </main>
    )

}

export default UserInfo