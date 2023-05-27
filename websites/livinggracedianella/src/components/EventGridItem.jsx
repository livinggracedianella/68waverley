import React from 'react';
export default function EventGridItem({ event }) {
    const { attributes: { title, summary, date, contact, slug, organiser } } = event;
    return (
        <div className="rounded-md overflow-hidden shadow-sm p-4  transition-transform h-auto">
            <a href={`/event/${slug}`}>
                <div className="rounded-md h-48 w-full overflow-hidden">
                    <img
                        className="object-cover w-full h-full"
                        src={
                            // featuredImage
                            //    ? `http://localhost:1337${featuredImage.url}`
                            //    : 'https://via.placeholder.com/1080'
                            'https://via.placeholder.com/180'
                        }
                    />
                </div>
                <div>
                    <h1 className="my-2 font-bold text-xl text-gray-900">{title}</h1>
                    <p className="my-2 text-gray-700 line-clamp-3">{summary}</p>
                </div>
                <div className="flex justify-between my-4 items-center">
                    <div className="flex space-x-2 items-center overflow-hidden">
                        <img
                            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                            src={
                                organiser?.contact
                                    ? `http://localhost:1337${author?.bioImage?.url}`
                                    : 'https://via.placeholder.com/180'
                            }
                            alt="author picture"
                        />
                        <p className="font-medium text-xs text-gray-600 cursor-pointer">{organiser?.name}</p>
                    </div>
                    <div class="inline-flex rounded-md ">
                        <a
                            href={`/event/${slug}`}
                            class="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400"
                        >
                            Read article
                        </a>
                    </div>
                </div>
            </a>
        </div>
    );
}
