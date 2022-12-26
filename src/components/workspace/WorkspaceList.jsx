import './WorkspaceList.css';
import WorkspaceShow from './WorkspaceShow';

function WorkspaceList({ workspaces }) {
  const renderedWorkspaces = workspaces.map((workspace, i) => {
    return (
      <WorkspaceShow 
        key={i} 
        workspace={workspace} 
      />
    );
  });

  return (
    <div className="container-list">
      {renderedWorkspaces}
    </div>
  );
};
  
export default WorkspaceList;