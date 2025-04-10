export const ContactsPage = async ( { params }) => {
    const { slug } = await params;

    throw new Error();
    return <div>contacts page - {slug.join(",")}</div>
}
export default ContactsPage;