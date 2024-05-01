namespace Hotel {
    export type HotelCardProps = {
        title: string;
        subTitle: string;
        image: {
            url: string;
            alt?: string;
        };
        content: string;
        no?: number;
        status?: string;
    };
    export type HotelCardsProps = {
        hotels: HotelCardProps[];
        status?: string;
    }

    export type HotelState = {
        hotels: HotelCardProps[];
        status: "success" | "pending" | "error" | "idle";
    };
}

export default Hotel;