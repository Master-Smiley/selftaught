

export class Guide {
    title: string;
    description: string;
    prereqs: string;
    experience: string;
    guideResources: any;
    user: string;

    constructor(title: string, description: string, prereqs: string, experience: string, guideResources: any,
        user: any) {

        this.title = title;
        this.description = description;
        this.prereqs = prereqs;
        this.experience = experience;
        this.guideResources = guideResources;
        this.user = user;
    }
}
