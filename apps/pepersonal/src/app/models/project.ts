export interface iProject {
  id: number;
  name: string;
  image: string;
  projectType: iProjectType;
  projectTech: iProjectTech[];
}

export interface iProjectType {
  id: number;
}

export interface iProjectTech {
  id: number;
}
