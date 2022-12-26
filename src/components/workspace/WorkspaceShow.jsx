import './WorkspaceShow.css';

function WorkspaceShow({ workspace }) {
    return (
      <div className="box">
        <div className={`color-bar--workspace-show ${'color-' + workspace.color}`}></div>
        <div className={'workspace-name'}>{workspace.name}</div>
      </div>
    );
};
  
export default WorkspaceShow;