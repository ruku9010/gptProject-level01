interface UserCardProps {
  id: number;
  name: string;
  age: number;
}

export default function UserCard({
  id,
  name,
  age,
}: UserCardProps) {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}