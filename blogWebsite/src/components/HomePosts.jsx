

const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
        <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img className="h-full w-full object-cover" src="https://media.slidesgo.com/storage/44761508/artificial-intelligence-ai-technology-project-proposal1700226998.jpg" alt="" />
        </div>
        <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                <p>@nabilAhmed</p>
                <div className="flex space-x-2">
                    <p>11/12/2023</p>
                    <p>1:04 AM</p>
                </div>
            </div>
            <p className="tex-sm md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora. Dolores in excepturi illo alias, quaerat, fugiat autem rerum pariatur harum optio minima qui numquam ipsam reprehenderit necessitatibus blanditiis iusto?
            </p>
        </div>
    </div>
  )
}

export default HomePosts