interface PropsType {
    name: string;
    age: number
}

export default function UserCard(props: PropsType){
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}