type AlertProps = {
    type: 'error' | 'info',
    message: string
}

function Alert(props: AlertProps) {

    const typeColor: Record<string, string> = {
        error: "text-red-400/90",
        info: "text-gray-400/90"
    }

    return (
        <div className="flex flex-col items-center justify-center py-14 px-4 text-center animate-fade-in">
            <div className={`flex items-center gap-2 text-lg font-bold ${typeColor[props.type]}`}>
                <span>{props.message}</span>
            </div>
        </div>
    )
}

export default Alert