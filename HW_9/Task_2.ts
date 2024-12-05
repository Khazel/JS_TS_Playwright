type IsSuccess = boolean;
type Float = number;

interface Dimensions {
    length: Float,
    width: Float,
    height: Float
};

enum PackageStatus {
    Pending,
    InTransit,
    Delivered,
    Lost
};

interface Parcel {
    readonly id: number,
    weight: Float,
    dimensions: Dimensions,
    sender: number | string,
    description?: string,
    status: PackageStatus,
    deliver: (isSuccess: IsSuccess) => void,
    statusName: string
};

const item: Parcel = {
    id: 224,
    weight: 22.5,
    dimensions: {
        length: 105,
        width: 44,
        height: 50.5
    },
    sender: "Nick Scot",
    description: "Super power inside.",
    status: PackageStatus.Pending,
    deliver(isSuccess) {
        this.status = isSuccess
        ? PackageStatus.Delivered
        : PackageStatus.Lost;
    },
    get statusName() {
        return PackageStatus[this.status];
    }
};

item.deliver(true);
console.log(item.statusName);