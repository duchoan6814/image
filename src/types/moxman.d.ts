// types.ts - TypeScript definitions for Moxman File Manager

// ============================================================================
// CORE TYPES
// ============================================================================

/**
 * Moxman action types
 */
export type MoxmanActionType =
  | 'browse'
  | 'upload'
  | 'edit'
  | 'view'
  | 'zip'
  | 'createDir'
  | 'createDoc'
  | 'rename';

/**
 * View modes for file browser
 */
export type MoxmanViewMode = 'thumbs' | 'files' | 'list';

/**
 * File types/extensions
 */
export type FileExtension = string; // Allow all extensions

// ============================================================================
// INTERFACES
// ============================================================================

/**
 * Base configuration for all Moxman actions
 */
export interface MoxmanBaseConfig {
  /** Target field ID to populate with selected file URL */
  fields?: string;
  /** View mode: thumbs, files, or list */
  view?: MoxmanViewMode;
  /** Default path to open */
  path?: string;
  /** Root path restriction */
  rootpath?: string;
  /** Allowed file extensions */
  extensions?: FileExtension | FileExtension[];
  /** Exclude file pattern (regex) */
  exclude_file_pattern?: string;
  /** Include file pattern (regex) */
  include_file_pattern?: string;
  /** Multiple file selection */
  multiple?: boolean;
  /** Relative URLs instead of absolute */
  relative_urls?: boolean;
  /** Remove host from URLs */
  no_host?: boolean;
  /** Document base URL for relative paths */
  document_base_url?: string;
  /** Z-index for modal */
  zIndex?: number;
  /** Language code */
  language?: string;
  /** Skin theme */
  skin?: 'lightgray' | 'darkgray' | 'custom';
  /** Fullscreen mode */
  fullscreen?: boolean;
  /** Close button */
  close?: boolean;
}

/**
 * Browse configuration
 */
export interface MoxmanBrowseConfig extends MoxmanBaseConfig {
  /** URL to start browsing from */
  url?: string;
  /** Callback when file is selected */
  oninsert?: (args: MoxmanInsertArgs) => void;
  /** Callback when dialog is closed */
  onclose?: () => void;
}

/**
 * Upload configuration
 */
export interface MoxmanUploadConfig extends MoxmanBaseConfig {
  /** Upload path */
  path: string;
  /** Callback when upload completes */
  onupload?: (result: MoxmanUploadResult) => void;
  /** Callback on upload progress */
  onprogress?: (progress: number) => void;
  /** Callback on upload error */
  onerror?: (error: string) => void;
}

/**
 * Edit configuration
 */
export interface MoxmanEditConfig extends MoxmanBaseConfig {
  /** Path to file to edit */
  path: string;
  /** Callback when save completes */
  onsave?: (result: MoxmanEditResult) => void;
  /** Callback on save error */
  onerror?: (error: string) => void;
}

/**
 * View configuration
 */
export interface MoxmanViewConfig extends MoxmanBaseConfig {
  /** Path to file to view */
  path: string;
  /** Callback when view is closed */
  onclose?: () => void;
}

/**
 * Create directory configuration
 */
export interface MoxmanCreateDirConfig extends MoxmanBaseConfig {
  /** Parent path where to create directory */
  path: string;
  /** Callback when directory is created */
  oncreate?: (result: MoxmanCreateDirResult) => void;
}

/**
 * Create document configuration
 */
export interface MoxmanCreateDocConfig extends MoxmanBaseConfig {
  /** Parent path where to create document */
  path: string;
  /** Document template */
  template?: string;
  /** Callback when document is created */
  oncreate?: (result: MoxmanCreateDocResult) => void;
}

/**
 * Rename configuration
 */
export interface MoxmanRenameConfig extends MoxmanBaseConfig {
  /** Path to file to rename */
  path: string;
  /** New name */
  name?: string;
  /** Callback when rename completes */
  onrename?: (result: MoxmanRenameResult) => void;
}

// ============================================================================
// RESULT INTERFACES
// ============================================================================

/**
 * File metadata
 */
export interface MoxmanFileMeta {
  /** File URL */
  url: string;
  /** File size in bytes */
  size: number;
  /** File width (for images) */
  width?: number;
  /** File height (for images) */
  height?: number;
  /** File type/MIME */
  type?: string;
  /** File name */
  name: string;
  /** File extension */
  extension: string;
  /** Last modified date */
  lastModified: number;
  /** Is directory */
  isDirectory: boolean;
  /** Can read */
  canRead: boolean;
  /** Can write */
  canWrite: boolean;
  /** Can edit */
  canEdit: boolean;
  /** Can delete */
  canDelete: boolean;
  /** Can view */
  canView: boolean;
  /** Is visible */
  visible: boolean;
  /** Exists */
  exists: boolean;
}

/**
 * Insert arguments
 */
export interface MoxmanInsertArgs {
  /** Selected files */
  files: MoxmanFileMeta[];
  /** Focused file */
  focusedFile: MoxmanFileMeta;
  /** All files */
  allFiles: MoxmanFileMeta[];
}

/**
 * Result of upload operation
 */
export interface MoxmanUploadResult {
  /** Uploaded files */
  files: MoxmanFileMeta[];
  /** Success status */
  success: boolean;
  /** Error message if failed */
  error?: string;
}

/**
 * Result of edit operation
 */
export interface MoxmanEditResult {
  /** Edited file */
  file: MoxmanFileMeta;
  /** Success status */
  success: boolean;
  /** Error message if failed */
  error?: string;
}

/**
 * Create directory result
 */
export interface MoxmanCreateDirResult {
  /** Created directory */
  directory: MoxmanFileMeta;
  /** Success status */
  success: boolean;
  /** Error message if failed */
  error?: string;
}

/**
 * Create document result
 */
export interface MoxmanCreateDocResult {
  /** Created document */
  document: MoxmanFileMeta;
  /** Success status */
  success: boolean;
  /** Error message if failed */
  error?: string;
}

/**
 * Result of rename operation
 */
export interface MoxmanRenameResult {
  /** Renamed file */
  file: MoxmanFileMeta;
  /** Success status */
  success: boolean;
  /** Error message if failed */
  error?: string;
}

// ============================================================================
// GLOBAL MOXMAN INTERFACE
// ============================================================================

/**
 * Global Moxman interface
 */
export interface MoxmanGlobal {
  /** Browse files */
  browse: (config: MoxmanBrowseConfig) => void;
  /** Upload files */
  upload: (config: MoxmanUploadConfig) => void;
  /** Edit file */
  edit: (config: MoxmanEditConfig) => void;
  /** View file */
  view: (config: MoxmanViewConfig) => void;
  /** Create directory */
  createDir: (config: MoxmanCreateDirConfig) => void;
  /** Create document */
  createDoc: (config: MoxmanCreateDocConfig) => void;
  /** Rename file */
  rename: (config: MoxmanRenameConfig) => void;
  /** Add internationalization */
  addI18n: (code: string, items: Record<string, string>) => void;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * File type categories
 */
export type FileTypeCategory =
  | 'image'
  | 'video'
  | 'audio'
  | 'document'
  | 'archive'
  | 'text'
  | 'other';

/**
 * File type configurations
 */
export interface FileTypeConfig {
  /** File extensions */
  extensions: FileExtension[];
  /** View mode */
  view: MoxmanViewMode;
  /** Category */
  category: FileTypeCategory;
  /** MIME types */
  mimeTypes?: string[];
}

// ============================================================================
// GLOBAL DECLARATION
// ============================================================================

declare global {
  /** Global window interface extension */
  interface Window {
    /** Global Moxman instance */
    moxman: MoxmanGlobal;
  }
}

export {};
