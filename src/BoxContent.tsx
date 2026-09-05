interface PropsType {
    children: React.ReactNode;
}

export default function BoxContent({children}:PropsType ){
    return (
        <div>
            {children}
        </div>
    )
}