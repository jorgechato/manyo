import { Project as ProjectType } from '../types/Config';
import { Project } from "./Project";


export type ProjectListProps = {
    projects: ProjectType[];
};


export function ProjectList(props: ProjectListProps) {
    return (
        <>
            <ul className='grid text-3xl md:grid-cols-2 xs:grid-cols-1 gap-4 mt-10'>
                {props.projects.map((project: ProjectType, index: number) => (
                    <li key={index} className='text-center'>
                    <Project url={project.url} name={project.name} />
                    </li>
                ))}
            </ul>
        </>
    );
}