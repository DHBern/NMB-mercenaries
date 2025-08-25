import { goto } from "$app/navigation";
export function navigateWithoutHistory(ev:Event, href:string) {
    ev.preventDefault();
    goto(href, {replaceState: true})
}