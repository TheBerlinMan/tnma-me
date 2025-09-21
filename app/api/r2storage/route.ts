import { NextRequest, NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/utils";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const bucket = searchParams.get('bucket');
    const folder = searchParams.get('folder');
    
    if (!bucket) {
      return NextResponse.json({ error: 'bucket parameter is required' }, { status: 400 });
    }

    // Build the prefix - if folder is provided, use folder/, otherwise list all files in the bucket
    const prefix = folder ? `${folder}/` : '';

    const command = new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: prefix,
    });
    
    const data = await s3.send(command);
    const fileKeys = data.Contents?.map((obj) => obj.Key) || [];
    
    return NextResponse.json(fileKeys);
  } catch (error) {
    console.error('Error fetching from R2:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch files', 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
} 