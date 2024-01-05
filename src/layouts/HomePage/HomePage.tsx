import { Carousel } from "./components/Carousel";
import { ExportTopBooks } from "./components/ExporeTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <>
        <ExportTopBooks />
        <Carousel />
        <Heros />
        <LibraryServices />
        </>
    );
}