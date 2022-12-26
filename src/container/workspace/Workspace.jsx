import './Workspace.css'
import { useState } from 'react';
import { WorkspaceList, WorkspaceCreate } from '../../components/index';

const testData = [
  { name: 'homeworks', color: 'green' },
  { name: 'works', color: 'blue' },
  { name: 'intership', color: 'orange' },
  { name: 'study', color: 'pink' },
  { name: 'travel plan', color: 'brown' },
  { name: 'project web.', color: 'purple' },
];

function Workspace() {
  const [workspaces, setWorkspaces] = useState(testData);
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateWorkspace = (name, color) => {
    const updateWorkspaces = [...workspaces, { name, color }];
    
    setWorkspaces(updateWorkspaces);
    setShowCreate(false);
  };

  let content;
  if (showCreate) {
    content = <WorkspaceCreate onCreate={handleCreateWorkspace} />
  }

  return (
    <>
      <div className="workspace">
        <h1 className="workspace-title">Workspaces</h1>
        <div className="workspace-box">
          <div className="color-bar--workspace"></div>
          <div className="workspace-content">
            <button 
              className="btn-create"
              onClick={() => setShowCreate(!showCreate)}
            >
              CREATE
            </button>
            <div className="workspace-list">
              <WorkspaceList workspaces={workspaces} />
            </div>
          </div>
        </div>
      </div>

      {content}
    </>
  );
};
  
export default Workspace;