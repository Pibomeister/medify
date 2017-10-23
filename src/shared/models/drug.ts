export interface IDrug {
    _id: string;
    name: string;
    fancyName: string;
    rating: Array<number>;
    price: number;
    discountPrice?: number;
    imgUrl?: string;
}
