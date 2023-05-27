function CardComponent() {
    return (
        <>

            {/* <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"> */}
            <div className="inline-block p-2 text-left align-middle transition-all transform bg-white sm:max-w-sm rounded-md  sm:my-4 sm:w-full sm:p-4">
                <div className="flex items-center justify-center rounded-md mx-auto -mt-8 shadow-xl">
                    <img className="h-full rounded-md" src="https://images.unsplash.com/photo-1602253057119-44d745d9b860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" alt="" />
                </div>

                <div className="mt-5 text-center">
                    <h3 className="text-lg font-medium text-primary_text">
                        Blog post published
                    </h3>

                    <p className="mt-2 text-secondary_text">
                        This blog post has been published. Team members will be
                        able to edit this post.
                    </p>
                </div>


                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-secondary_text mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-secondary_text mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal text-secondary_text mr-2 mb-2">#winter</span>
                </div>
            </div>
            {/* </div> */}

        </>
    )
}

export default CardComponent