import Link from "next/link";

export default function WebsiteLink({ website_url }) {
  return (
    <>
      {website_url && (
        <Link
          href={`${website_url}`}
          target="_blank"
          className="text-center text-sm font-normal text-white mt-4 mb-6 hover:bg-primaryColor bg-secondaryColor rounded-lg p-2 inline-block w-full"
        >
          {website_url.replace(/^https?\:\/\//i, "").replace(/\/$/, "")}
        </Link>
      )}
    </>
  );
}
