export class Guide {
    title: string;
    description: string;
    prereqs: string;
    resourceTitles: string[];
    resourceLinks: string[];
    resourceTime: number[];
    resourceContent: string[];
    username?: string;
    messageId?: string;
    userId?: string;

    constructor(title: string, description: string, prereqs: string, resourceTitles: string[],
        resourceLinks: string[], resourceTime: number[], resourceContent: string[],
        username: string, messageId: string, userId: string) {

        this.title = title;
        this.description = description;
        this.prereqs = prereqs;
        this.resourceTitles = resourceTitles;
        this.resourceLinks = resourceLinks;
        this.resourceTime = resourceTime;
        this.resourceContent = resourceContent;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }
}
