export class GuideResource {
    title: string;
    link: string;
    time: number;
    content: string;

    constructor(title: string, link: string, time: number, content: string) {
        this.title = title;
        this.link = link;
        this.time = time;
        this.content = content;
    }
}
