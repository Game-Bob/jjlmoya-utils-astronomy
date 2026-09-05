const getNodeText = (node: HTMLAnchorElement, selector: string): string =>
    node.querySelector(selector)?.textContent ?? "";

const setText = (element: HTMLElement | null, text: string): void => {
    element?.replaceChildren(document.createTextNode(text));
};

interface MissionElements {
    title: HTMLElement | null;
    description: HTMLElement | null;
    status: HTMLElement | null;
    link: HTMLAnchorElement | null;
}

const updateMission = (node: HTMLAnchorElement, mission: MissionElements, label: string): void => {
    const title = getNodeText(node, "strong");
    setText(mission.title, title);
    setText(mission.description, getNodeText(node, "small"));
    setText(mission.status, title);
    mission.link?.setAttribute("href", node.href);
    mission.link?.setAttribute("aria-label", label);
};

export function enhanceAstronomyHome(): void {
    const home = document.querySelector<HTMLElement>("[data-astronomy-home]");
    if (!home) return;
    const nodes = [...home.querySelectorAll<HTMLAnchorElement>("[data-tool-node]")];
    if (nodes.length === 0) return;
    const routeButton = home.querySelector<HTMLButtonElement>("[data-route-button]");
    const missionTitle = home.querySelector<HTMLElement>("[data-mission-title]");
    const missionDescription = home.querySelector<HTMLElement>("[data-mission-description]");
    const missionLink = home.querySelector<HTMLAnchorElement>("[data-mission-link]");
    const missionStatus = home.querySelector<HTMLElement>("[data-mission-status]");
    const labels = nodes.map((node) => node.getAttribute("aria-label") ?? "");
    let activeIndex = 0;

    const selectNode = (index: number, focus = false): void => {
        const node = nodes[index];
        if (!node) return;
        activeIndex = index;
        nodes.forEach((item, itemIndex) => item.classList.toggle("is-active", itemIndex === index));
        updateMission(node, { title: missionTitle, description: missionDescription, status: missionStatus, link: missionLink }, labels[index] ?? "");
        if (focus) node.focus({ preventScroll: false });
    };

    nodes.forEach((node, index) => {
        node.addEventListener("focus", () => selectNode(index));
        node.addEventListener("pointerenter", () => selectNode(index));
    });
    selectNode(0);
    routeButton?.addEventListener("click", () => selectNode((activeIndex + 1) % nodes.length, true));
}
