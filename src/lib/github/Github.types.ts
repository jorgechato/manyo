export type PinnedRepos = {
    name: string;
    description: string;
    url: string;
    homepageUrl: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: {
        name: string;
        color: string;
    };
}

export type ProfileStatus = {
    emoji: string;
    message: string;
};