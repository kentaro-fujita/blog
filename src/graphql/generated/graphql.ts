import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  fileName?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Int']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']>
  sys: Sys
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type AssetFilter = {
  AND?: Maybe<Array<Maybe<AssetFilter>>>
  OR?: Maybe<Array<Maybe<AssetFilter>>>
  contentType?: Maybe<Scalars['String']>
  contentType_contains?: Maybe<Scalars['String']>
  contentType_exists?: Maybe<Scalars['Boolean']>
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentType_not?: Maybe<Scalars['String']>
  contentType_not_contains?: Maybe<Scalars['String']>
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  description?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName?: Maybe<Scalars['String']>
  fileName_contains?: Maybe<Scalars['String']>
  fileName_exists?: Maybe<Scalars['Boolean']>
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>
  fileName_not?: Maybe<Scalars['String']>
  fileName_not_contains?: Maybe<Scalars['String']>
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  height?: Maybe<Scalars['Int']>
  height_exists?: Maybe<Scalars['Boolean']>
  height_gt?: Maybe<Scalars['Int']>
  height_gte?: Maybe<Scalars['Int']>
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  height_lt?: Maybe<Scalars['Int']>
  height_lte?: Maybe<Scalars['Int']>
  height_not?: Maybe<Scalars['Int']>
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size?: Maybe<Scalars['Int']>
  size_exists?: Maybe<Scalars['Boolean']>
  size_gt?: Maybe<Scalars['Int']>
  size_gte?: Maybe<Scalars['Int']>
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  size_lt?: Maybe<Scalars['Int']>
  size_lte?: Maybe<Scalars['Int']>
  size_not?: Maybe<Scalars['Int']>
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  sys?: Maybe<SysFilter>
  title?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_exists?: Maybe<Scalars['Boolean']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url?: Maybe<Scalars['String']>
  url_contains?: Maybe<Scalars['String']>
  url_exists?: Maybe<Scalars['Boolean']>
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>
  url_not?: Maybe<Scalars['String']>
  url_not_contains?: Maybe<Scalars['String']>
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  width?: Maybe<Scalars['Int']>
  width_exists?: Maybe<Scalars['Boolean']>
  width_gt?: Maybe<Scalars['Int']>
  width_gte?: Maybe<Scalars['Int']>
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>
  width_lt?: Maybe<Scalars['Int']>
  width_lte?: Maybe<Scalars['Int']>
  width_not?: Maybe<Scalars['Int']>
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  postCollection?: Maybe<PostCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>
  locale?: Maybe<Scalars['String']>
  preview?: Maybe<Scalars['Boolean']>
  skip?: Maybe<Scalars['Int']>
}

export type AssetLinkingCollectionsPostCollectionArgs = {
  limit?: Maybe<Scalars['Int']>
  locale?: Maybe<Scalars['String']>
  preview?: Maybe<Scalars['Boolean']>
  skip?: Maybe<Scalars['Int']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: Maybe<ContentfulMetadataTagsFilter>
  tags_exists?: Maybe<Scalars['Boolean']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type EntryFilter = {
  AND?: Maybe<Array<Maybe<EntryFilter>>>
  OR?: Maybe<Array<Maybe<EntryFilter>>>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  sys?: Maybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type Post = Entry & {
  __typename?: 'Post'
  catchImage?: Maybe<Asset>
  content?: Maybe<Scalars['String']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']>
  linkedFrom?: Maybe<PostLinkingCollections>
  slug?: Maybe<Scalars['String']>
  sys: Sys
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  title?: Maybe<Scalars['String']>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type PostCatchImageArgs = {
  locale?: Maybe<Scalars['String']>
  preview?: Maybe<Scalars['Boolean']>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type PostContentArgs = {
  locale?: Maybe<Scalars['String']>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type PostDescriptionArgs = {
  locale?: Maybe<Scalars['String']>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type PostSlugArgs = {
  locale?: Maybe<Scalars['String']>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type PostTagsArgs = {
  locale?: Maybe<Scalars['String']>
}

/** blog post [See type definition](https://app.contentful.com/spaces/u2pfr3cv5fny/content_types/post) */
export type PostTitleArgs = {
  locale?: Maybe<Scalars['String']>
}

export type PostCollection = {
  __typename?: 'PostCollection'
  items: Array<Maybe<Post>>
  limit: Scalars['Int']
  skip: Scalars['Int']
  total: Scalars['Int']
}

export type PostFilter = {
  AND?: Maybe<Array<Maybe<PostFilter>>>
  OR?: Maybe<Array<Maybe<PostFilter>>>
  catchImage_exists?: Maybe<Scalars['Boolean']>
  content?: Maybe<Scalars['String']>
  content_contains?: Maybe<Scalars['String']>
  content_exists?: Maybe<Scalars['Boolean']>
  content_in?: Maybe<Array<Maybe<Scalars['String']>>>
  content_not?: Maybe<Scalars['String']>
  content_not_contains?: Maybe<Scalars['String']>
  content_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>
  description?: Maybe<Scalars['String']>
  description_contains?: Maybe<Scalars['String']>
  description_exists?: Maybe<Scalars['Boolean']>
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>
  description_not?: Maybe<Scalars['String']>
  description_not_contains?: Maybe<Scalars['String']>
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug?: Maybe<Scalars['String']>
  slug_contains?: Maybe<Scalars['String']>
  slug_exists?: Maybe<Scalars['Boolean']>
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>
  slug_not?: Maybe<Scalars['String']>
  slug_not_contains?: Maybe<Scalars['String']>
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  sys?: Maybe<SysFilter>
  tags_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>
  tags_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>
  tags_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>
  tags_exists?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  title_contains?: Maybe<Scalars['String']>
  title_exists?: Maybe<Scalars['Boolean']>
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>
  title_not?: Maybe<Scalars['String']>
  title_not_contains?: Maybe<Scalars['String']>
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type PostLinkingCollections = {
  __typename?: 'PostLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>
  locale?: Maybe<Scalars['String']>
  preview?: Maybe<Scalars['Boolean']>
  skip?: Maybe<Scalars['Int']>
}

export enum PostOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  entryCollection?: Maybe<EntryCollection>
  post?: Maybe<Post>
  postCollection?: Maybe<PostCollection>
}

export type QueryAssetArgs = {
  id: Scalars['String']
  locale?: Maybe<Scalars['String']>
  preview?: Maybe<Scalars['Boolean']>
}

export type QueryAssetCollectionArgs = {
  limit?: Maybe<Scalars['Int']>
  locale?: Maybe<Scalars['String']>
  order?: Maybe<Array<Maybe<AssetOrder>>>
  preview?: Maybe<Scalars['Boolean']>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<AssetFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>
  locale?: Maybe<Scalars['String']>
  order?: Maybe<Array<Maybe<EntryOrder>>>
  preview?: Maybe<Scalars['Boolean']>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<EntryFilter>
}

export type QueryPostArgs = {
  id: Scalars['String']
  locale?: Maybe<Scalars['String']>
  preview?: Maybe<Scalars['Boolean']>
}

export type QueryPostCollectionArgs = {
  limit?: Maybe<Scalars['Int']>
  locale?: Maybe<Scalars['String']>
  order?: Maybe<Array<Maybe<PostOrder>>>
  preview?: Maybe<Scalars['Boolean']>
  skip?: Maybe<Scalars['Int']>
  where?: Maybe<PostFilter>
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  id: Scalars['String']
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedVersion?: Maybe<Scalars['Int']>
  spaceId: Scalars['String']
}

export type SysFilter = {
  firstPublishedAt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  id?: Maybe<Scalars['String']>
  id_contains?: Maybe<Scalars['String']>
  id_exists?: Maybe<Scalars['Boolean']>
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>
  id_not?: Maybe<Scalars['String']>
  id_not_contains?: Maybe<Scalars['String']>
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>
  publishedAt?: Maybe<Scalars['DateTime']>
  publishedAt_exists?: Maybe<Scalars['Boolean']>
  publishedAt_gt?: Maybe<Scalars['DateTime']>
  publishedAt_gte?: Maybe<Scalars['DateTime']>
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedAt_lt?: Maybe<Scalars['DateTime']>
  publishedAt_lte?: Maybe<Scalars['DateTime']>
  publishedAt_not?: Maybe<Scalars['DateTime']>
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>
  publishedVersion?: Maybe<Scalars['Float']>
  publishedVersion_exists?: Maybe<Scalars['Boolean']>
  publishedVersion_gt?: Maybe<Scalars['Float']>
  publishedVersion_gte?: Maybe<Scalars['Float']>
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>
  publishedVersion_lt?: Maybe<Scalars['Float']>
  publishedVersion_lte?: Maybe<Scalars['Float']>
  publishedVersion_not?: Maybe<Scalars['Float']>
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type TopPageQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}>

export type TopPageQuery = {
  __typename?: 'Query'
  posts?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              title?: string | null | undefined
              slug?: string | null | undefined
              description?: string | null | undefined
              tags?: Array<string | null | undefined> | null | undefined
              sys: {
                __typename?: 'Sys'
                firstPublishedAt?: any | null | undefined
              }
              catchImage?:
                | { __typename?: 'Asset'; url?: string | null | undefined }
                | null
                | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  latestPosts?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              title?: string | null | undefined
              slug?: string | null | undefined
              sys: {
                __typename?: 'Sys'
                firstPublishedAt?: any | null | undefined
              }
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  allTags?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              tags?: Array<string | null | undefined> | null | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  allSlugs?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | { __typename?: 'Post'; slug?: string | null | undefined }
          | null
          | undefined
        >
      }
    | null
    | undefined
}

export type PostPageQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  slug: Scalars['String']
}>

export type PostPageQuery = {
  __typename?: 'Query'
  posts?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              title?: string | null | undefined
              content?: string | null | undefined
              description?: string | null | undefined
              tags?: Array<string | null | undefined> | null | undefined
              sys: {
                __typename?: 'Sys'
                firstPublishedAt?: any | null | undefined
                publishedAt?: any | null | undefined
              }
              catchImage?:
                | { __typename?: 'Asset'; url?: string | null | undefined }
                | null
                | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  latestPosts?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              title?: string | null | undefined
              slug?: string | null | undefined
              sys: {
                __typename?: 'Sys'
                firstPublishedAt?: any | null | undefined
              }
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  allTags?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              tags?: Array<string | null | undefined> | null | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  allSlugs?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | { __typename?: 'Post'; slug?: string | null | undefined }
          | null
          | undefined
        >
      }
    | null
    | undefined
}

export type TagPageQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  tags: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>
}>

export type TagPageQuery = {
  __typename?: 'Query'
  posts?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              title?: string | null | undefined
              slug?: string | null | undefined
              description?: string | null | undefined
              content?: string | null | undefined
              tags?: Array<string | null | undefined> | null | undefined
              sys: {
                __typename?: 'Sys'
                firstPublishedAt?: any | null | undefined
                publishedAt?: any | null | undefined
              }
              catchImage?:
                | { __typename?: 'Asset'; url?: string | null | undefined }
                | null
                | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  latestPosts?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              title?: string | null | undefined
              slug?: string | null | undefined
              sys: {
                __typename?: 'Sys'
                firstPublishedAt?: any | null | undefined
              }
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  allTags?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              tags?: Array<string | null | undefined> | null | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
}

export type AboutPageQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>
}>

export type AboutPageQuery = {
  __typename?: 'Query'
  latestPosts?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              title?: string | null | undefined
              slug?: string | null | undefined
              sys: {
                __typename?: 'Sys'
                firstPublishedAt?: any | null | undefined
              }
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
  allTags?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              tags?: Array<string | null | undefined> | null | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
}

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllTagsQuery = {
  __typename?: 'Query'
  allTags?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | {
              __typename?: 'Post'
              tags?: Array<string | null | undefined> | null | undefined
            }
          | null
          | undefined
        >
      }
    | null
    | undefined
}

export type GetAllSlugsQueryVariables = Exact<{ [key: string]: never }>

export type GetAllSlugsQuery = {
  __typename?: 'Query'
  allSlugs?:
    | {
        __typename?: 'PostCollection'
        items: Array<
          | { __typename?: 'Post'; slug?: string | null | undefined }
          | null
          | undefined
        >
      }
    | null
    | undefined
}

export const TopPage = gql`
  query TopPage($skip: Int, $limit: Int) {
    posts: postCollection(
      skip: $skip
      limit: $limit
      order: [sys_firstPublishedAt_DESC]
    ) {
      items {
        sys {
          firstPublishedAt
        }
        title
        slug
        description
        tags
        catchImage {
          url
        }
      }
    }
    latestPosts: postCollection(
      skip: 0
      limit: $limit
      order: [sys_firstPublishedAt_DESC]
    ) {
      items {
        title
        slug
        sys {
          firstPublishedAt
        }
      }
    }
    allTags: postCollection {
      items {
        tags
      }
    }
    allSlugs: postCollection {
      items {
        slug
      }
    }
  }
`
export const PostPage = gql`
  query PostPage($skip: Int, $limit: Int, $slug: String!) {
    posts: postCollection(skip: $skip, limit: $limit, where: { slug: $slug }) {
      items {
        sys {
          firstPublishedAt
          publishedAt
        }
        title
        content
        description
        tags
        catchImage {
          url
        }
      }
    }
    latestPosts: postCollection(
      skip: 0
      limit: $limit
      order: [sys_firstPublishedAt_DESC]
    ) {
      items {
        title
        slug
        sys {
          firstPublishedAt
        }
      }
    }
    allTags: postCollection {
      items {
        tags
      }
    }
    allSlugs: postCollection {
      items {
        slug
      }
    }
  }
`
export const TagPage = gql`
  query TagPage($skip: Int, $limit: Int, $tags: [String]!) {
    posts: postCollection(
      skip: $skip
      limit: $limit
      where: { tags_contains_some: $tags }
    ) {
      items {
        sys {
          firstPublishedAt
          publishedAt
        }
        title
        slug
        description
        content
        tags
        catchImage {
          url
        }
      }
    }
    latestPosts: postCollection(
      skip: 0
      limit: $limit
      order: [sys_firstPublishedAt_DESC]
    ) {
      items {
        title
        slug
        sys {
          firstPublishedAt
        }
      }
    }
    allTags: postCollection {
      items {
        tags
      }
    }
  }
`
export const AboutPage = gql`
  query AboutPage($limit: Int) {
    latestPosts: postCollection(
      skip: 0
      limit: $limit
      order: [sys_firstPublishedAt_DESC]
    ) {
      items {
        title
        slug
        sys {
          firstPublishedAt
        }
      }
    }
    allTags: postCollection {
      items {
        tags
      }
    }
  }
`
export const GetAllTags = gql`
  query getAllTags {
    allTags: postCollection {
      items {
        tags
      }
    }
  }
`
export const GetAllSlugs = gql`
  query getAllSlugs {
    allSlugs: postCollection {
      items {
        slug
      }
    }
  }
`
