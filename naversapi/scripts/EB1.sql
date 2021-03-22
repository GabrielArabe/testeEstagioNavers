DROP TABLE [dbo].[projects_navers]
DROP TABLE [dbo].[navers]
DROP TABLE [dbo].[projects]
GO

CREATE TABLE [dbo].[navers](
	[id] [uniqueidentifier] NOT NULL DEFAULT (newid()),
	[name] [varchar](50) NOT NULL,
	[job_role] [varchar](50) NOT NULL,
	[birthdate] [date] NOT NULL,
	[admission_date] [date] NOT NULL,
	[created_at] [datetime] NOT NULL DEFAULT (getdate()),
	[updated_at] [datetime] NOT NULL DEFAULT (getdate()),
	CONSTRAINT [PK_navers] PRIMARY KEY CLUSTERED ([id] ASC)
)

CREATE TABLE [dbo].[projects](
	[id] [uniqueidentifier] NOT NULL DEFAULT (newid()),
	[name] [varchar](50) NOT NULL,
	[created_at] [datetime] NOT NULL DEFAULT (getdate()),
	[updated_at] [datetime] NOT NULL DEFAULT (getdate()),
 CONSTRAINT [PK_projects] PRIMARY KEY CLUSTERED ([id] ASC)
)

CREATE TABLE [dbo].[projects_navers](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[project_id] [uniqueidentifier] NOT NULL,
	[naver_id] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_projects_navers] PRIMARY KEY CLUSTERED ([id] ASC)
) 
GO

ALTER TABLE [dbo].[projects_navers]  WITH CHECK ADD  CONSTRAINT [FK_projects_navers_navers] FOREIGN KEY([naver_id])
REFERENCES [dbo].[navers] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[projects_navers] CHECK CONSTRAINT [FK_projects_navers_navers]
GO

ALTER TABLE [dbo].[projects_navers]  WITH CHECK ADD  CONSTRAINT [FK_projects_navers_projects] FOREIGN KEY([project_id])
REFERENCES [dbo].[projects] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[projects_navers] CHECK CONSTRAINT [FK_projects_navers_projects]
GO

