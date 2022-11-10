export type TUser = {
  name: string;
  organization: string;
};

export type TWorkspaces = {
  id: string;
  name: string;
  description: string;
}[];

export type TCard = {
  id: string;
  name: string;
  columnId: string; // TBoardColumn.id
  description: string;
};

export type TBoardColumn = {
  id: string;
  name: string;
  position: number;
};

export type TBoard = {
  id: string;
  workspaceId: string;
  name: string;
  columns: TBoardColumn[];
  cards: TCard[];
};

export type TBoards = TBoard[];

export type TStore = {
  user: TUser | null;
  workspaces: TWorkspaces;
  activeWorkspace: string | null;
  activeBoard: string | null;
  boards: TBoards;
};
