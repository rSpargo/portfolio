import { For, Show } from "solid-js"
import { Route } from "../routes"
import { A } from "@solidjs/router"

export default function Navbar(props: any) {
    return (
        <For each={props.routes} fallback={<div>loading...</div>}>
            {(route: Route): Element => {
                return (
                <Show when={route.title}>
                    <nav><A href={route.path}>{route.title}</A></nav>
                </Show>
                ) as Element}
            }
        </For>
    )
}