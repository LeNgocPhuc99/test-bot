
interface TrimmedAddressComponentProps {
    address: string;
    startChars?: number;
    endChars?: number;
}

export default function TrimmedAddressComponent(props: TrimmedAddressComponentProps) {
    const trimmedAddress =
        props.address.substring(0, (props.startChars ?? 5)) +
        '...' +
        props.address.substring(props.address.length - (props.endChars ?? 5));

    return (
        <>
            {trimmedAddress}
        </>
    );
}