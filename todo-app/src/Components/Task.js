import React from 'react';

class Task extends React.Component {
    render() {
        const { title, description, isCompleted, onComplete, onDelete} = this.props;
        return (
            <div className="task-item d-flex border border-light mb-2">
                <div className="task-info m-2 w-75">
                    <h2 className={`m-2 ${isCompleted ? 'text-decoration-line-through text-muted': ''}`}><b>{title}</b></h2>
                    <p className={`m-2 ${isCompleted ? 'text-decoration-line-through text-muted' : ''}`}>{description}</p>
                </div>
                <div className="m-2 w-25">
                    <button 
                        type="button"
                        className="btn btn-success mt-4 mx-1"
                        onClick={onComplete}    
                    >
                        {isCompleted ? 'Undo' : 'Completed'}
                    </button>
                    <button 
                        type="button"
                        className="btn btn-danger mt-4 mx-1"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Task;
