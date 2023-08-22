import { PageProps, graphql } from 'gatsby';
import React from 'react';
import { renderRichText, RenderRichTextData } from 'gatsby-source-contentful/rich-text'


const BlogTemplate = (props: PageProps<{
  contentfulBlogPage: {
    title: string;
    content: RenderRichTextData<any>
  }
}>) => {
  const {title, content} = props.data.contentfulBlogPage;
  // return <pre style={{
  //   whiteSpace: 'pre-wrap'
  // }}>
  //   {JSON.stringify(props.data, null, 2)}
  // </pre>
  return <div>
    <div>
      <h1> {title} </h1>
    </div>
    <div>
    {renderRichText(content)}
    </div>
  </div>
}

export const BlogPageQuery = graphql`
  query BlogPageBySlug(
    $slug: String!
  ) {
    contentfulBlogPage(slug: {eq: $slug}) {
      title
      content {
        raw
      }
    }
  }
`;

export default BlogTemplate;
