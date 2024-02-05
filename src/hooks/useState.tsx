import React from "react";

type StateProps<T> = [
    state: T,
    handleState: (newState: T) => void
]

function useState<T>(defaultValue: T): StateProps<T> {
    const [state, setState] = React.useState(defaultValue);

    function handleState(newState: T): void {
        setState(newState);
    }

    return [state, handleState];
}

export default useState;