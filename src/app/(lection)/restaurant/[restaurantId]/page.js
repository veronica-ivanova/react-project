const RestaurantPage = async({ params }) => {
    const {restaurantId} = await params;
    return <div>RestaurantPage - {restaurantId}</div>
}

export default RestaurantPage