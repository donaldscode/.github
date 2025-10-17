import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'

export default function CareersPage() {
  // Read the careers markdown file
  const careersPath = path.join(process.cwd(), '..', 'outputs', 'careers.md')
  const careersContent = fs.readFileSync(careersPath, 'utf8')

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{careersContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}