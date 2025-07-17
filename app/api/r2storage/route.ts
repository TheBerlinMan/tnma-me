import { NextRequest, NextResponse } from "next/server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/utils";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder');
    
    if (!folder) {
      return NextResponse.json({ error: 'Folder parameter is required' }, { status: 400 });
    }

    const command = new ListObjectsV2Command({
      Bucket: process.env.R2_BUCKET_NAME!,
      Prefix: `${folder}/`,
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