import Link from "next/link"

export default function f1(){
    return(
        <div>
            <h1>f1 Page</h1>
            <div>
                <Link href="/f1/f2">F2</Link>
                <Link href="/f3">F3</Link>
            </div>
        </div>
    )
}