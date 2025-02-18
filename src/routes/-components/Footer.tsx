import React from 'react'

function Footer() {
  // TODO serach obj
  const user = 'visiky'

  return (
    <footer className=" fixed bottom-0 left-0 right-0 pt-6">
      <div className=" flex justify-center text-sm items-center p-3 bg-[#273f75] text-[#ffffffd9]">
        <div>
          <span className="">Made with ❤️</span>
          <span className="mx-1">
            by
            <span
              className=" ml-1 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.open(`https://github.com/${user}`)
                }
              }}
            >
              {user}
            </span>
          </span>
        </div>

        <a
          href="https://github.com/visiky/resume.git"
          className=" text-[#ffffffd9] hover:text-white absolute right-2 text-xs"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="icon-[icon-park-outline--github] mr-1 text-white"></i>
          {' '}
          项目代码
        </a>
      </div>
    </footer>
  )
}

export default Footer
