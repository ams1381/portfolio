export const Loader = () => {
    return <div className={'fixed w-full h-full z-50 bg-[var(--prevLoader-bg)]'}>
        <div className="diamondCon">
            <ul className="diamond">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            {/*<div className="textCon">Diamond Loader</div>*/}
        </div>
    </div>
}